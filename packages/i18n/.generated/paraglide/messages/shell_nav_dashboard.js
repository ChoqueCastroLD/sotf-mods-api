/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Nav_DashboardInputs */

const en_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const es_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const de_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const fr_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tableau de bord`)
};

const it_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const nl_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dashboard`)
};

const pl_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const pt_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Painel`)
};

const ru_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Панель`)
};

const sv_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översikt`)
};

const tr_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panel`)
};

const zh_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台`)
};

const ja_shell_nav_dashboard = /** @type {(inputs: Shell_Nav_DashboardInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダッシュボード`)
};

/**
* | output |
* | --- |
* | "Dashboard" |
*
* @param {Shell_Nav_DashboardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_nav_dashboard = /** @type {((inputs?: Shell_Nav_DashboardInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Nav_DashboardInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_nav_dashboard(inputs)
	if (locale === "de") return de_shell_nav_dashboard(inputs)
	if (locale === "fr") return fr_shell_nav_dashboard(inputs)
	if (locale === "it") return it_shell_nav_dashboard(inputs)
	if (locale === "nl") return nl_shell_nav_dashboard(inputs)
	if (locale === "pl") return pl_shell_nav_dashboard(inputs)
	if (locale === "pt") return pt_shell_nav_dashboard(inputs)
	if (locale === "ru") return ru_shell_nav_dashboard(inputs)
	if (locale === "sv") return sv_shell_nav_dashboard(inputs)
	if (locale === "tr") return tr_shell_nav_dashboard(inputs)
	if (locale === "zh") return zh_shell_nav_dashboard(inputs)
	if (locale === "ja") return ja_shell_nav_dashboard(inputs)
	return en_shell_nav_dashboard(inputs)
});
