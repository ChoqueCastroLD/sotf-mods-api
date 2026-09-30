/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_RemovedInputs */

const en_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment deleted.`)
};

const es_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario eliminado.`)
};

const de_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar gelöscht.`)
};

const fr_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire supprimé.`)
};

const it_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento eliminato.`)
};

const nl_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie verwijderd.`)
};

const pl_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz usunięty.`)
};

const pt_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário excluído.`)
};

const ru_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий удалён.`)
};

const sv_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren har tagits bort.`)
};

const tr_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum silindi.`)
};

const zh_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已删除。`)
};

const ja_kitsocial_removed = /** @type {(inputs: Kitsocial_RemovedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを削除しました。`)
};

/**
* | output |
* | --- |
* | "Comment deleted." |
*
* @param {Kitsocial_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_removed = /** @type {((inputs?: Kitsocial_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_removed(inputs)
	if (locale === "de") return de_kitsocial_removed(inputs)
	if (locale === "fr") return fr_kitsocial_removed(inputs)
	if (locale === "it") return it_kitsocial_removed(inputs)
	if (locale === "nl") return nl_kitsocial_removed(inputs)
	if (locale === "pl") return pl_kitsocial_removed(inputs)
	if (locale === "pt") return pt_kitsocial_removed(inputs)
	if (locale === "ru") return ru_kitsocial_removed(inputs)
	if (locale === "sv") return sv_kitsocial_removed(inputs)
	if (locale === "tr") return tr_kitsocial_removed(inputs)
	if (locale === "zh") return zh_kitsocial_removed(inputs)
	if (locale === "ja") return ja_kitsocial_removed(inputs)
	return en_kitsocial_removed(inputs)
});
