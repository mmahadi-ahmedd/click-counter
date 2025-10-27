import React, { useEffect, useState } from 'react';
import axios from "axios";

const Dashboard = () => {

    const [stats, setStats] = useState({ amazon: 0, walmart: 0 });
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get("https://btn-counter-server.vercel.app/stats");
                setStats(res.data);
            } catch (err) {
                console.error("Error fetching stats:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-base-200">
            <h1 className="text-4xl font-bold mb-8"> Dashboard</h1>

            {loading ? (
                <p className="text-lg text-gray-600">Loading...</p>
            ) : (
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">Amazon Clicks</div>
                        <div className="stat-value text-primary">{stats.amazon || 0}</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Walmart Clicks</div>
                        <div className="stat-value text-secondary">
                            {stats.walmart || 0}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;