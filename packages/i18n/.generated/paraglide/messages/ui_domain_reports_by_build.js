/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Reports_By_BuildInputs */

const en_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`By game build`)
};

const es_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por build del juego`)
};

const de_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Spiel-Build`)
};

const fr_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Par build du jeu`)
};

const it_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per build del gioco`)
};

const nl_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per game-build`)
};

const pl_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Według buildu gry`)
};

const pt_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por build do jogo`)
};

const ru_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По сборкам игры`)
};

const sv_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per spelbygge`)
};

const tr_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümüne göre`)
};

const zh_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按游戏版本`)
};

const ja_ui_domain_reports_by_build = /** @type {(inputs: Ui_Domain_Reports_By_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルド別`)
};

/**
* | output |
* | --- |
* | "By game build" |
*
* @param {Ui_Domain_Reports_By_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reports_by_build = /** @type {((inputs?: Ui_Domain_Reports_By_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reports_By_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reports_by_build(inputs)
	if (locale === "de") return de_ui_domain_reports_by_build(inputs)
	if (locale === "fr") return fr_ui_domain_reports_by_build(inputs)
	if (locale === "it") return it_ui_domain_reports_by_build(inputs)
	if (locale === "nl") return nl_ui_domain_reports_by_build(inputs)
	if (locale === "pl") return pl_ui_domain_reports_by_build(inputs)
	if (locale === "pt") return pt_ui_domain_reports_by_build(inputs)
	if (locale === "ru") return ru_ui_domain_reports_by_build(inputs)
	if (locale === "sv") return sv_ui_domain_reports_by_build(inputs)
	if (locale === "tr") return tr_ui_domain_reports_by_build(inputs)
	if (locale === "zh") return zh_ui_domain_reports_by_build(inputs)
	if (locale === "ja") return ja_ui_domain_reports_by_build(inputs)
	return en_ui_domain_reports_by_build(inputs)
});
