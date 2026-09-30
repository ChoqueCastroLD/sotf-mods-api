/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Template_Copy_FailedInputs */

const en_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t copy to the clipboard`)
};

const es_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ha podido copiar al portapapeles`)
};

const de_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konnte nicht in die Zwischenablage kopieren`)
};

const fr_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de copier dans le presse-papiers`)
};

const it_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile copiare negli appunti`)
};

const nl_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiëren naar het klembord is mislukt`)
};

const pl_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się skopiować do schowka`)
};

const pt_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível copiar para a área de transferência`)
};

const ru_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось скопировать в буфер обмена`)
};

const sv_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att kopiera till urklipp`)
};

const tr_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Panoya kopyalanamadı`)
};

const zh_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法复制到剪贴板`)
};

const ja_settings_template_copy_failed = /** @type {(inputs: Settings_Template_Copy_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリップボードにコピーできませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t copy to the clipboard" |
*
* @param {Settings_Template_Copy_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_template_copy_failed = /** @type {((inputs?: Settings_Template_Copy_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Template_Copy_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_template_copy_failed(inputs)
	if (locale === "de") return de_settings_template_copy_failed(inputs)
	if (locale === "fr") return fr_settings_template_copy_failed(inputs)
	if (locale === "it") return it_settings_template_copy_failed(inputs)
	if (locale === "nl") return nl_settings_template_copy_failed(inputs)
	if (locale === "pl") return pl_settings_template_copy_failed(inputs)
	if (locale === "pt") return pt_settings_template_copy_failed(inputs)
	if (locale === "ru") return ru_settings_template_copy_failed(inputs)
	if (locale === "sv") return sv_settings_template_copy_failed(inputs)
	if (locale === "tr") return tr_settings_template_copy_failed(inputs)
	if (locale === "zh") return zh_settings_template_copy_failed(inputs)
	if (locale === "ja") return ja_settings_template_copy_failed(inputs)
	return en_settings_template_copy_failed(inputs)
});
