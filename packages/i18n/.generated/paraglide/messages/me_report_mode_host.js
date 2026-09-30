/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_Mode_HostInputs */

const en_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer host`)
};

const es_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anfitrión multijugador`)
};

const de_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehrspieler-Host`)
};

const fr_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hôte multijoueur`)
};

const it_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host multigiocatore`)
};

const nl_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer-host`)
};

const pl_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host gry wieloosobowej`)
};

const pt_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anfitrião multijogador`)
};

const ru_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Хост мультиплеера`)
};

const sv_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flerspelarvärd`)
};

const tr_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu sunucu (host)`)
};

const zh_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人游戏主机`)
};

const ja_me_report_mode_host = /** @type {(inputs: Me_Report_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ（ホスト）`)
};

/**
* | output |
* | --- |
* | "Multiplayer host" |
*
* @param {Me_Report_Mode_HostInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_mode_host = /** @type {((inputs?: Me_Report_Mode_HostInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_Mode_HostInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_mode_host(inputs)
	if (locale === "de") return de_me_report_mode_host(inputs)
	if (locale === "fr") return fr_me_report_mode_host(inputs)
	if (locale === "it") return it_me_report_mode_host(inputs)
	if (locale === "nl") return nl_me_report_mode_host(inputs)
	if (locale === "pl") return pl_me_report_mode_host(inputs)
	if (locale === "pt") return pt_me_report_mode_host(inputs)
	if (locale === "ru") return ru_me_report_mode_host(inputs)
	if (locale === "sv") return sv_me_report_mode_host(inputs)
	if (locale === "tr") return tr_me_report_mode_host(inputs)
	if (locale === "zh") return zh_me_report_mode_host(inputs)
	if (locale === "ja") return ja_me_report_mode_host(inputs)
	return en_me_report_mode_host(inputs)
});
