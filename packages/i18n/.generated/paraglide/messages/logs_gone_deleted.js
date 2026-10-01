/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Gone_DeletedInputs */

const en_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The creator deleted this log.`)
};

const es_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El autor borró este log.`)
};

const de_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Ersteller hat dieses Log gelöscht.`)
};

const fr_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’auteur a supprimé ce log.`)
};

const it_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’autore ha eliminato questo log.`)
};

const nl_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De maker heeft deze log verwijderd.`)
};

const pl_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor usunął ten log.`)
};

const pt_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O autor apagou este log.`)
};

const ru_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор удалил этот лог.`)
};

const sv_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparen raderade den här loggen.`)
};

const tr_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logu oluşturan kişi bunu sildi.`)
};

const zh_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建者已删除此日志。`)
};

const ja_logs_gone_deleted = /** @type {(inputs: Logs_Gone_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作成者がこのログを削除しました。`)
};

/**
* | output |
* | --- |
* | "The creator deleted this log." |
*
* @param {Logs_Gone_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_gone_deleted = /** @type {((inputs?: Logs_Gone_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Gone_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_gone_deleted(inputs)
	if (locale === "de") return de_logs_gone_deleted(inputs)
	if (locale === "fr") return fr_logs_gone_deleted(inputs)
	if (locale === "it") return it_logs_gone_deleted(inputs)
	if (locale === "nl") return nl_logs_gone_deleted(inputs)
	if (locale === "pl") return pl_logs_gone_deleted(inputs)
	if (locale === "pt") return pt_logs_gone_deleted(inputs)
	if (locale === "ru") return ru_logs_gone_deleted(inputs)
	if (locale === "sv") return sv_logs_gone_deleted(inputs)
	if (locale === "tr") return tr_logs_gone_deleted(inputs)
	if (locale === "zh") return zh_logs_gone_deleted(inputs)
	if (locale === "ja") return ja_logs_gone_deleted(inputs)
	return en_logs_gone_deleted(inputs)
});
