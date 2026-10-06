/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Footer_TonihubInputs */

const en_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Up to date data dumps for Sons of the Forest`)
};

const es_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volcados de datos actualizados para Sons of the Forest`)
};

const de_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuelle Daten-Dumps für Sons of the Forest`)
};

const fr_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Données à jour pour Sons of the Forest`)
};

const it_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estrazioni dati aggiornate per Sons of the Forest`)
};

const nl_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actuele gegevensdumps voor Sons of the Forest`)
};

const pl_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bieżące zrzuty danych dla Sons of the Forest`)
};

const pt_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Despejos de dados atualizados para Sons of the Forest`)
};

const ru_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Актуальные выгрузки данных для Sons of the Forest`)
};

const sv_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdaterade datauttag för Sons of the Forest`)
};

const tr_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest için güncel veri dökümleri`)
};

const zh_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提供最新数据转储供《森林之子》使用`)
};

const ja_shell_footer_tonihub = /** @type {(inputs: Shell_Footer_TonihubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の最新データダンプ`)
};

/**
* | output |
* | --- |
* | "Up to date data dumps for Sons of the Forest" |
*
* @param {Shell_Footer_TonihubInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_footer_tonihub = /** @type {((inputs?: Shell_Footer_TonihubInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Footer_TonihubInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_footer_tonihub(inputs)
	if (locale === "de") return de_shell_footer_tonihub(inputs)
	if (locale === "fr") return fr_shell_footer_tonihub(inputs)
	if (locale === "it") return it_shell_footer_tonihub(inputs)
	if (locale === "nl") return nl_shell_footer_tonihub(inputs)
	if (locale === "pl") return pl_shell_footer_tonihub(inputs)
	if (locale === "pt") return pt_shell_footer_tonihub(inputs)
	if (locale === "ru") return ru_shell_footer_tonihub(inputs)
	if (locale === "sv") return sv_shell_footer_tonihub(inputs)
	if (locale === "tr") return tr_shell_footer_tonihub(inputs)
	if (locale === "zh") return zh_shell_footer_tonihub(inputs)
	if (locale === "ja") return ja_shell_footer_tonihub(inputs)
	return en_shell_footer_tonihub(inputs)
});
