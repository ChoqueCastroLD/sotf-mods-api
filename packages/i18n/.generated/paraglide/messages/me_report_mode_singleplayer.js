/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Report_Mode_SingleplayerInputs */

const en_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Single player`)
};

const es_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un jugador`)
};

const de_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einzelspieler`)
};

const fr_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo`)
};

const it_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giocatore singolo`)
};

const nl_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Singleplayer`)
};

const pl_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gra jednoosobowa`)
};

const pt_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um jogador`)
};

const ru_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одиночная игра`)
};

const sv_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enspelarläge`)
};

const tr_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tek oyunculu`)
};

const zh_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`单人游戏`)
};

const ja_me_report_mode_singleplayer = /** @type {(inputs: Me_Report_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シングルプレイ`)
};

/**
* | output |
* | --- |
* | "Single player" |
*
* @param {Me_Report_Mode_SingleplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_report_mode_singleplayer = /** @type {((inputs?: Me_Report_Mode_SingleplayerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Report_Mode_SingleplayerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_report_mode_singleplayer(inputs)
	if (locale === "de") return de_me_report_mode_singleplayer(inputs)
	if (locale === "fr") return fr_me_report_mode_singleplayer(inputs)
	if (locale === "it") return it_me_report_mode_singleplayer(inputs)
	if (locale === "nl") return nl_me_report_mode_singleplayer(inputs)
	if (locale === "pl") return pl_me_report_mode_singleplayer(inputs)
	if (locale === "pt") return pt_me_report_mode_singleplayer(inputs)
	if (locale === "ru") return ru_me_report_mode_singleplayer(inputs)
	if (locale === "sv") return sv_me_report_mode_singleplayer(inputs)
	if (locale === "tr") return tr_me_report_mode_singleplayer(inputs)
	if (locale === "zh") return zh_me_report_mode_singleplayer(inputs)
	if (locale === "ja") return ja_me_report_mode_singleplayer(inputs)
	return en_me_report_mode_singleplayer(inputs)
});
