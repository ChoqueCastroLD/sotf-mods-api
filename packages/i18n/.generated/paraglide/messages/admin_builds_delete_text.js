/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Delete_TextInputs */

const en_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only a build that is not in use can be deleted.`)
};

const es_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo se puede eliminar una build que no esté en uso.`)
};

const de_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Builds, die nicht verwendet werden, können gelöscht werden.`)
};

const fr_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seul un build qui n’est pas utilisé peut être supprimé.`)
};

const it_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si può eliminare solo una build che non è in uso.`)
};

const nl_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen een build die niet in gebruik is, kan worden verwijderd.`)
};

const pl_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Można usunąć tylko build, który nie jest używany.`)
};

const pt_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só é possível excluir um build que não esteja em uso.`)
};

const ru_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить можно только сборку, которая не используется.`)
};

const sv_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara ett bygge som inte används kan tas bort.`)
};

const tr_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca kullanılmayan bir sürüm silinebilir.`)
};

const zh_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有未被使用的版本才能删除。`)
};

const ja_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用されていないビルドだけ削除できます。`)
};

/**
* | output |
* | --- |
* | "Only a build that is not in use can be deleted." |
*
* @param {Admin_Builds_Delete_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_delete_text = /** @type {((inputs?: Admin_Builds_Delete_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Delete_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_delete_text(inputs)
	if (locale === "de") return de_admin_builds_delete_text(inputs)
	if (locale === "fr") return fr_admin_builds_delete_text(inputs)
	if (locale === "it") return it_admin_builds_delete_text(inputs)
	if (locale === "nl") return nl_admin_builds_delete_text(inputs)
	if (locale === "pl") return pl_admin_builds_delete_text(inputs)
	if (locale === "pt") return pt_admin_builds_delete_text(inputs)
	if (locale === "ru") return ru_admin_builds_delete_text(inputs)
	if (locale === "sv") return sv_admin_builds_delete_text(inputs)
	if (locale === "tr") return tr_admin_builds_delete_text(inputs)
	if (locale === "zh") return zh_admin_builds_delete_text(inputs)
	if (locale === "ja") return ja_admin_builds_delete_text(inputs)
	return en_admin_builds_delete_text(inputs)
});
