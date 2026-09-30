/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Field_Reason_HintInputs */

const en_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shown with the award. Up to 500 characters.`)
};

const es_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se muestra con el premio. Hasta 500 caracteres.`)
};

const de_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird mit der Auszeichnung angezeigt. Bis zu 500 Zeichen.`)
};

const fr_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affiché avec la récompense. Jusqu’à 500 caractères.`)
};

const it_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrato insieme al premio. Fino a 500 caratteri.`)
};

const nl_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wordt bij de prijs getoond. Maximaal 500 tekens.`)
};

const pl_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyświetlany z wyróżnieniem. Do 500 znaków.`)
};

const pt_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aparece junto com o prêmio. Até 500 caracteres.`)
};

const ru_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывается вместе с наградой. До 500 символов.`)
};

const sv_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visas med utmärkelsen. Upp till 500 tecken.`)
};

const tr_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ödülle birlikte gösterilir. En fazla 500 karakter.`)
};

const zh_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`与奖项一同显示。最多 500 个字符。`)
};

const ja_admin_awards_field_reason_hint = /** @type {(inputs: Admin_Awards_Field_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワードと一緒に表示されます。500 文字以内。`)
};

/**
* | output |
* | --- |
* | "Shown with the award. Up to 500 characters." |
*
* @param {Admin_Awards_Field_Reason_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_field_reason_hint = /** @type {((inputs?: Admin_Awards_Field_Reason_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Field_Reason_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_field_reason_hint(inputs)
	if (locale === "de") return de_admin_awards_field_reason_hint(inputs)
	if (locale === "fr") return fr_admin_awards_field_reason_hint(inputs)
	if (locale === "it") return it_admin_awards_field_reason_hint(inputs)
	if (locale === "nl") return nl_admin_awards_field_reason_hint(inputs)
	if (locale === "pl") return pl_admin_awards_field_reason_hint(inputs)
	if (locale === "pt") return pt_admin_awards_field_reason_hint(inputs)
	if (locale === "ru") return ru_admin_awards_field_reason_hint(inputs)
	if (locale === "sv") return sv_admin_awards_field_reason_hint(inputs)
	if (locale === "tr") return tr_admin_awards_field_reason_hint(inputs)
	if (locale === "zh") return zh_admin_awards_field_reason_hint(inputs)
	if (locale === "ja") return ja_admin_awards_field_reason_hint(inputs)
	return en_admin_awards_field_reason_hint(inputs)
});
