/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Field_Slug_HintInputs */

const en_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lowercase letters, digits and hyphens. It cannot be changed later.`)
};

const es_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minúsculas, dígitos y guiones. No se puede cambiar después.`)
};

const de_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kleinbuchstaben, Ziffern und Bindestriche. Lässt sich später nicht ändern.`)
};

const fr_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minuscules, chiffres et tirets. Non modifiable ensuite.`)
};

const it_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lettere minuscole, cifre e trattini. Non si può cambiare in seguito.`)
};

const nl_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kleine letters, cijfers en streepjes. Kan later niet worden gewijzigd.`)
};

const pl_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Małe litery, cyfry i myślniki. Nie można zmienić później.`)
};

const pt_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minúsculas, dígitos e hifens. Não pode ser alterado depois.`)
};

const ru_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Строчные буквы, цифры и дефисы. Позже изменить нельзя.`)
};

const sv_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemener, siffror och bindestreck. Kan inte ändras senare.`)
};

const tr_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Küçük harf, rakam ve tire. Sonradan değiştirilemez.`)
};

const zh_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小写字母、数字和连字符。之后无法更改。`)
};

const ja_jams_admin_field_slug_hint = /** @type {(inputs: Jams_Admin_Field_Slug_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`小文字、数字、ハイフン。後から変更できません。`)
};

/**
* | output |
* | --- |
* | "Lowercase letters, digits and hyphens. It cannot be changed later." |
*
* @param {Jams_Admin_Field_Slug_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_field_slug_hint = /** @type {((inputs?: Jams_Admin_Field_Slug_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Field_Slug_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_field_slug_hint(inputs)
	if (locale === "de") return de_jams_admin_field_slug_hint(inputs)
	if (locale === "fr") return fr_jams_admin_field_slug_hint(inputs)
	if (locale === "it") return it_jams_admin_field_slug_hint(inputs)
	if (locale === "nl") return nl_jams_admin_field_slug_hint(inputs)
	if (locale === "pl") return pl_jams_admin_field_slug_hint(inputs)
	if (locale === "pt") return pt_jams_admin_field_slug_hint(inputs)
	if (locale === "ru") return ru_jams_admin_field_slug_hint(inputs)
	if (locale === "sv") return sv_jams_admin_field_slug_hint(inputs)
	if (locale === "tr") return tr_jams_admin_field_slug_hint(inputs)
	if (locale === "zh") return zh_jams_admin_field_slug_hint(inputs)
	if (locale === "ja") return ja_jams_admin_field_slug_hint(inputs)
	return en_jams_admin_field_slug_hint(inputs)
});
