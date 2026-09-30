/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Tag_Extras_Unknown_TextInputs */

const en_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The API doesn’t return them yet. Saving replaces them with the values in this form.`)
};

const es_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La API aún no los devuelve. Al guardar se sustituyen por los valores de este formulario.`)
};

const de_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die API liefert sie noch nicht. Beim Speichern werden sie durch die Werte dieses Formulars ersetzt.`)
};

const fr_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’API ne les renvoie pas encore. L’enregistrement les remplace par les valeurs de ce formulaire.`)
};

const it_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’API non li restituisce ancora. Salvando vengono sostituiti dai valori di questo modulo.`)
};

const nl_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De API geeft ze nog niet terug. Opslaan vervangt ze door de waarden in dit formulier.`)
};

const pl_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API jeszcze ich nie zwraca. Zapisanie zastąpi je wartościami z tego formularza.`)
};

const pt_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A API ainda não as retorna. Salvar as substitui pelos valores deste formulário.`)
};

const ru_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API пока их не возвращает. При сохранении они заменятся значениями из этой формы.`)
};

const sv_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API:et returnerar dem inte än. När du sparar ersätts de med värdena i det här formuläret.`)
};

const tr_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API bunları henüz döndürmüyor. Kaydetmek, bu formdaki değerlerle değiştirir.`)
};

const zh_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 尚未返回这些内容。保存后会被此表单中的值替换。`)
};

const ja_admin_tax_tag_extras_unknown_text = /** @type {(inputs: Admin_Tax_Tag_Extras_Unknown_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API がまだ返しません。保存すると、このフォームの値に置き換わります。`)
};

/**
* | output |
* | --- |
* | "The API doesn’t return them yet. Saving replaces them with the values in this form." |
*
* @param {Admin_Tax_Tag_Extras_Unknown_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tag_extras_unknown_text = /** @type {((inputs?: Admin_Tax_Tag_Extras_Unknown_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tag_Extras_Unknown_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "de") return de_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "fr") return fr_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "it") return it_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "nl") return nl_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "pl") return pl_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "pt") return pt_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "ru") return ru_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "sv") return sv_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "tr") return tr_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "zh") return zh_admin_tax_tag_extras_unknown_text(inputs)
	if (locale === "ja") return ja_admin_tax_tag_extras_unknown_text(inputs)
	return en_admin_tax_tag_extras_unknown_text(inputs)
});
