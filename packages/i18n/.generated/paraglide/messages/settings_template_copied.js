/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Settings_Template_CopiedInputs */

const en_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» copied`)
};

const es_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» copiada`)
};

const de_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.name}“ kopiert`)
};

const fr_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`« ${i?.name} » copié`)
};

const it_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» copiato`)
};

const nl_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`‘${i?.name}’ gekopieerd`)
};

const pl_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skopiowano „${i?.name}”`)
};

const pt_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” copiado`)
};

const ru_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.name}» скопирован`)
};

const sv_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`”${i?.name}” kopierad`)
};

const tr_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.name}” kopyalandı`)
};

const zh_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已复制“${i?.name}”`)
};

const ja_settings_template_copied = /** @type {(inputs: Settings_Template_CopiedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.name}」をコピーしました`)
};

/**
* | output |
* | --- |
* | "«{name}» copied" |
*
* @param {Settings_Template_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_template_copied = /** @type {((inputs: Settings_Template_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Template_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_template_copied(inputs)
	if (locale === "de") return de_settings_template_copied(inputs)
	if (locale === "fr") return fr_settings_template_copied(inputs)
	if (locale === "it") return it_settings_template_copied(inputs)
	if (locale === "nl") return nl_settings_template_copied(inputs)
	if (locale === "pl") return pl_settings_template_copied(inputs)
	if (locale === "pt") return pt_settings_template_copied(inputs)
	if (locale === "ru") return ru_settings_template_copied(inputs)
	if (locale === "sv") return sv_settings_template_copied(inputs)
	if (locale === "tr") return tr_settings_template_copied(inputs)
	if (locale === "zh") return zh_settings_template_copied(inputs)
	if (locale === "ja") return ja_settings_template_copied(inputs)
	return en_settings_template_copied(inputs)
});
