/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_Mode_ClientInputs */

const en_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer client`)
};

const es_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente multijugador`)
};

const de_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehrspieler-Client`)
};

const fr_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client multijoueur`)
};

const it_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client multigiocatore`)
};

const nl_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer-client`)
};

const pl_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient gry wieloosobowej`)
};

const pt_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente multijogador`)
};

const ru_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Клиент мультиплеера`)
};

const sv_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flerspelarklient`)
};

const tr_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu istemci`)
};

const zh_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人游戏客户端`)
};

const ja_me_report_mode_client = /** @type {(inputs: Me_Report_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ（クライアント）`)
};

/**
* | output |
* | --- |
* | "Multiplayer client" |
*
* @param {Me_Report_Mode_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_mode_client = /** @type {((inputs?: Me_Report_Mode_ClientInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_Mode_ClientInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_mode_client(inputs)
	if (locale === "de") return de_me_report_mode_client(inputs)
	if (locale === "fr") return fr_me_report_mode_client(inputs)
	if (locale === "it") return it_me_report_mode_client(inputs)
	if (locale === "nl") return nl_me_report_mode_client(inputs)
	if (locale === "pl") return pl_me_report_mode_client(inputs)
	if (locale === "pt") return pt_me_report_mode_client(inputs)
	if (locale === "ru") return ru_me_report_mode_client(inputs)
	if (locale === "sv") return sv_me_report_mode_client(inputs)
	if (locale === "tr") return tr_me_report_mode_client(inputs)
	if (locale === "zh") return zh_me_report_mode_client(inputs)
	if (locale === "ja") return ja_me_report_mode_client(inputs)
	return en_me_report_mode_client(inputs)
});
