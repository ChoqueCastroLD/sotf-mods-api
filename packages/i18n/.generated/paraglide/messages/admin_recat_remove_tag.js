/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ tag: NonNullable<unknown>, name: NonNullable<unknown> }} Admin_Recat_Remove_TagInputs */

const en_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove the tag ${i?.tag} from ${i?.name}`)
};

const es_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar la etiqueta ${i?.tag} de ${i?.name}`)
};

const de_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag ${i?.tag} von ${i?.name} entfernen`)
};

const fr_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer le tag ${i?.tag} de ${i?.name}`)
};

const it_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi il tag ${i?.tag} da ${i?.name}`)
};

const nl_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag ${i?.tag} van ${i?.name} verwijderen`)
};

const pl_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń tag ${i?.tag} z ${i?.name}`)
};

const pt_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover a tag ${i?.tag} de ${i?.name}`)
};

const ru_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Убрать тег ${i?.tag} у ${i?.name}`)
};

const sv_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort taggen ${i?.tag} från ${i?.name}`)
};

const tr_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tag} etiketini ${i?.name} modundan kaldır`)
};

const zh_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`从 ${i?.name} 移除标签 ${i?.tag}`)
};

const ja_admin_recat_remove_tag = /** @type {(inputs: Admin_Recat_Remove_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} からタグ ${i?.tag} を外す`)
};

/**
* | output |
* | --- |
* | "Remove the tag {tag} from {name}" |
*
* @param {Admin_Recat_Remove_TagInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_remove_tag = /** @type {((inputs: Admin_Recat_Remove_TagInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Remove_TagInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_remove_tag(inputs)
	if (locale === "de") return de_admin_recat_remove_tag(inputs)
	if (locale === "fr") return fr_admin_recat_remove_tag(inputs)
	if (locale === "it") return it_admin_recat_remove_tag(inputs)
	if (locale === "nl") return nl_admin_recat_remove_tag(inputs)
	if (locale === "pl") return pl_admin_recat_remove_tag(inputs)
	if (locale === "pt") return pt_admin_recat_remove_tag(inputs)
	if (locale === "ru") return ru_admin_recat_remove_tag(inputs)
	if (locale === "sv") return sv_admin_recat_remove_tag(inputs)
	if (locale === "tr") return tr_admin_recat_remove_tag(inputs)
	if (locale === "zh") return zh_admin_recat_remove_tag(inputs)
	if (locale === "ja") return ja_admin_recat_remove_tag(inputs)
	return en_admin_recat_remove_tag(inputs)
});
