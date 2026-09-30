/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Unsaved_TextInputs */

const en_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your changes to this mod have not been saved and will be lost.`)
};

const es_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los cambios de este mod no se han guardado y se perderán.`)
};

const de_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Änderungen an diesem Mod sind nicht gespeichert und gehen verloren.`)
};

const fr_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tes modifications de ce mod ne sont pas enregistrées et seront perdues.`)
};

const it_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le modifiche a questa mod non sono state salvate e andranno perse.`)
};

const nl_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je wijzigingen aan deze mod zijn niet opgeslagen en gaan verloren.`)
};

const pl_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiany w tym modzie nie zostały zapisane i przepadną.`)
};

const pt_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As alterações deste mod não foram salvas e serão perdidas.`)
};

const ru_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменения этого мода не сохранены и будут потеряны.`)
};

const sv_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina ändringar i den här modden har inte sparats och går förlorade.`)
};

const tr_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu moddaki değişikliklerin kaydedilmedi ve kaybolacak.`)
};

const zh_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你对此模组的更改尚未保存，离开后将丢失。`)
};

const ja_basecamp_unsaved_text = /** @type {(inputs: Basecamp_Unsaved_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD への変更は保存されておらず、失われます。`)
};

/**
* | output |
* | --- |
* | "Your changes to this mod have not been saved and will be lost." |
*
* @param {Basecamp_Unsaved_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_unsaved_text = /** @type {((inputs?: Basecamp_Unsaved_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Unsaved_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_unsaved_text(inputs)
	if (locale === "de") return de_basecamp_unsaved_text(inputs)
	if (locale === "fr") return fr_basecamp_unsaved_text(inputs)
	if (locale === "it") return it_basecamp_unsaved_text(inputs)
	if (locale === "nl") return nl_basecamp_unsaved_text(inputs)
	if (locale === "pl") return pl_basecamp_unsaved_text(inputs)
	if (locale === "pt") return pt_basecamp_unsaved_text(inputs)
	if (locale === "ru") return ru_basecamp_unsaved_text(inputs)
	if (locale === "sv") return sv_basecamp_unsaved_text(inputs)
	if (locale === "tr") return tr_basecamp_unsaved_text(inputs)
	if (locale === "zh") return zh_basecamp_unsaved_text(inputs)
	if (locale === "ja") return ja_basecamp_unsaved_text(inputs)
	return en_basecamp_unsaved_text(inputs)
});
