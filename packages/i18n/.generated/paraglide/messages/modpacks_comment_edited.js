/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Comment_EditedInputs */

const en_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edited`)
};

const es_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editado`)
};

const de_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearbeitet`)
};

const fr_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifié`)
};

const it_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modificato`)
};

const nl_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewerkt`)
};

const pl_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytowano`)
};

const pt_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editado`)
};

const ru_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменено`)
};

const sv_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigerad`)
};

const tr_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenlendi`)
};

const zh_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已编辑`)
};

const ja_modpacks_comment_edited = /** @type {(inputs: Modpacks_Comment_EditedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集済み`)
};

/**
* | output |
* | --- |
* | "Edited" |
*
* @param {Modpacks_Comment_EditedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_comment_edited = /** @type {((inputs?: Modpacks_Comment_EditedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Comment_EditedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_comment_edited(inputs)
	if (locale === "de") return de_modpacks_comment_edited(inputs)
	if (locale === "fr") return fr_modpacks_comment_edited(inputs)
	if (locale === "it") return it_modpacks_comment_edited(inputs)
	if (locale === "nl") return nl_modpacks_comment_edited(inputs)
	if (locale === "pl") return pl_modpacks_comment_edited(inputs)
	if (locale === "pt") return pt_modpacks_comment_edited(inputs)
	if (locale === "ru") return ru_modpacks_comment_edited(inputs)
	if (locale === "sv") return sv_modpacks_comment_edited(inputs)
	if (locale === "tr") return tr_modpacks_comment_edited(inputs)
	if (locale === "zh") return zh_modpacks_comment_edited(inputs)
	if (locale === "ja") return ja_modpacks_comment_edited(inputs)
	return en_modpacks_comment_edited(inputs)
});
