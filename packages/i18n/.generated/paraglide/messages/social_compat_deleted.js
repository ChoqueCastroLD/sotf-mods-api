/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_DeletedInputs */

const en_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field report deleted.`)
};

const es_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte de campo eliminado.`)
};

const de_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldbericht gelöscht.`)
};

const fr_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport de terrain supprimé.`)
};

const it_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporto sul campo eliminato.`)
};

const nl_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldrapport verwijderd.`)
};

const pl_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raport z terenu usunięty.`)
};

const pt_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relato de campo excluído.`)
};

const ru_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевой отчёт удалён.`)
};

const sv_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältrapporten är raderad.`)
};

const tr_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha raporu silindi.`)
};

const zh_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实测报告已删除。`)
};

const ja_social_compat_deleted = /** @type {(inputs: Social_Compat_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドレポートを削除しました。`)
};

/**
* | output |
* | --- |
* | "Field report deleted." |
*
* @param {Social_Compat_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_deleted = /** @type {((inputs?: Social_Compat_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_deleted(inputs)
	if (locale === "de") return de_social_compat_deleted(inputs)
	if (locale === "fr") return fr_social_compat_deleted(inputs)
	if (locale === "it") return it_social_compat_deleted(inputs)
	if (locale === "nl") return nl_social_compat_deleted(inputs)
	if (locale === "pl") return pl_social_compat_deleted(inputs)
	if (locale === "pt") return pt_social_compat_deleted(inputs)
	if (locale === "ru") return ru_social_compat_deleted(inputs)
	if (locale === "sv") return sv_social_compat_deleted(inputs)
	if (locale === "tr") return tr_social_compat_deleted(inputs)
	if (locale === "zh") return zh_social_compat_deleted(inputs)
	if (locale === "ja") return ja_social_compat_deleted(inputs)
	return en_social_compat_deleted(inputs)
});
