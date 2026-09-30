/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Field_Display_Name_HintInputs */

const en_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How other survivors see you. You can change it later.`)
};

const es_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo te ven otros supervivientes. Puedes cambiarlo más tarde.`)
};

const de_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`So sehen dich andere Überlebende. Du kannst ihn später ändern.`)
};

const fr_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que voient les autres survivants. Vous pourrez le changer plus tard.`)
};

const it_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come ti vedono gli altri sopravvissuti. Puoi cambiarlo in seguito.`)
};

const nl_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zo zien andere overlevenden je. Je kunt dit later wijzigen.`)
};

const pl_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tak widzą cię inni ocalali. Możesz ją później zmienić.`)
};

const pt_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como outros sobreviventes veem você. Dá para mudar depois.`)
};

const ru_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Так вас видят другие выжившие. Его можно изменить позже.`)
};

const sv_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så ser andra överlevare dig. Du kan ändra det senare.`)
};

const tr_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer hayatta kalanlar seni böyle görür. Daha sonra değiştirebilirsin.`)
};

const zh_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他幸存者看到的名字，之后可以修改。`)
};

const ja_auth_field_display_name_hint = /** @type {(inputs: Auth_Field_Display_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかのサバイバーに表示される名前です。あとから変更できます。`)
};

/**
* | output |
* | --- |
* | "How other survivors see you. You can change it later." |
*
* @param {Auth_Field_Display_Name_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_field_display_name_hint = /** @type {((inputs?: Auth_Field_Display_Name_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Field_Display_Name_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_field_display_name_hint(inputs)
	if (locale === "de") return de_auth_field_display_name_hint(inputs)
	if (locale === "fr") return fr_auth_field_display_name_hint(inputs)
	if (locale === "it") return it_auth_field_display_name_hint(inputs)
	if (locale === "nl") return nl_auth_field_display_name_hint(inputs)
	if (locale === "pl") return pl_auth_field_display_name_hint(inputs)
	if (locale === "pt") return pt_auth_field_display_name_hint(inputs)
	if (locale === "ru") return ru_auth_field_display_name_hint(inputs)
	if (locale === "sv") return sv_auth_field_display_name_hint(inputs)
	if (locale === "tr") return tr_auth_field_display_name_hint(inputs)
	if (locale === "zh") return zh_auth_field_display_name_hint(inputs)
	if (locale === "ja") return ja_auth_field_display_name_hint(inputs)
	return en_auth_field_display_name_hint(inputs)
});
