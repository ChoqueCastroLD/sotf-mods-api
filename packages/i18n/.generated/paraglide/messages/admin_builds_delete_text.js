/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Delete_TextInputs */

const en_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Only builds nobody has reported on can be deleted.`)
};

const es_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo se pueden eliminar las builds sobre las que nadie ha reportado.`)
};

const de_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Builds ohne Berichte können gelöscht werden.`)
};

const fr_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seuls les builds sans aucun rapport peuvent être supprimés.`)
};

const it_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si possono eliminare solo le build senza report.`)
};

const nl_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen builds zonder rapporten kunnen worden verwijderd.`)
};

const pl_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Można usunąć tylko buildy bez żadnych raportów.`)
};

const pt_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só é possível excluir builds sem nenhum relato.`)
};

const ru_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить можно только сборки без отчётов.`)
};

const sv_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara byggen utan rapporter kan tas bort.`)
};

const tr_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca hiç raporu olmayan sürümler silinebilir.`)
};

const zh_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只有没有任何报告的版本才能删除。`)
};

const ja_admin_builds_delete_text = /** @type {(inputs: Admin_Builds_Delete_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レポートが 1 件もないビルドだけ削除できます。`)
};

/**
* | output |
* | --- |
* | "Only builds nobody has reported on can be deleted." |
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
