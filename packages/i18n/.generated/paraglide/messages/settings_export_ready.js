/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Export_ReadyInputs */

const en_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your export is ready`)
};

const es_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu exportación está lista`)
};

const de_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Export ist fertig`)
};

const fr_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre export est prêt`)
};

const it_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua esportazione è pronta`)
};

const nl_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je export staat klaar`)
};

const pl_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój eksport jest gotowy`)
};

const pt_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua exportação está pronta`)
};

const ru_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш экспорт готов`)
};

const sv_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din export är klar`)
};

const tr_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dışa aktarımın hazır`)
};

const zh_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的导出已就绪`)
};

const ja_settings_export_ready = /** @type {(inputs: Settings_Export_ReadyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エクスポートの準備ができました`)
};

/**
* | output |
* | --- |
* | "Your export is ready" |
*
* @param {Settings_Export_ReadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_export_ready = /** @type {((inputs?: Settings_Export_ReadyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_ReadyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_export_ready(inputs)
	if (locale === "de") return de_settings_export_ready(inputs)
	if (locale === "fr") return fr_settings_export_ready(inputs)
	if (locale === "it") return it_settings_export_ready(inputs)
	if (locale === "nl") return nl_settings_export_ready(inputs)
	if (locale === "pl") return pl_settings_export_ready(inputs)
	if (locale === "pt") return pt_settings_export_ready(inputs)
	if (locale === "ru") return ru_settings_export_ready(inputs)
	if (locale === "sv") return sv_settings_export_ready(inputs)
	if (locale === "tr") return tr_settings_export_ready(inputs)
	if (locale === "zh") return zh_settings_export_ready(inputs)
	if (locale === "ja") return ja_settings_export_ready(inputs)
	return en_settings_export_ready(inputs)
});
