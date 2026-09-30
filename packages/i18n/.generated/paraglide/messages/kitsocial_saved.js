/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_SavedInputs */

const en_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment updated.`)
};

const es_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario actualizado.`)
};

const de_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar aktualisiert.`)
};

const fr_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire mis à jour.`)
};

const it_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento aggiornato.`)
};

const nl_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie bijgewerkt.`)
};

const pl_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz zaktualizowany.`)
};

const pt_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário atualizado.`)
};

const ru_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий обновлён.`)
};

const sv_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren har uppdaterats.`)
};

const tr_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum güncellendi.`)
};

const zh_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已更新。`)
};

const ja_kitsocial_saved = /** @type {(inputs: Kitsocial_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを更新しました。`)
};

/**
* | output |
* | --- |
* | "Comment updated." |
*
* @param {Kitsocial_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_saved = /** @type {((inputs?: Kitsocial_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_saved(inputs)
	if (locale === "de") return de_kitsocial_saved(inputs)
	if (locale === "fr") return fr_kitsocial_saved(inputs)
	if (locale === "it") return it_kitsocial_saved(inputs)
	if (locale === "nl") return nl_kitsocial_saved(inputs)
	if (locale === "pl") return pl_kitsocial_saved(inputs)
	if (locale === "pt") return pt_kitsocial_saved(inputs)
	if (locale === "ru") return ru_kitsocial_saved(inputs)
	if (locale === "sv") return sv_kitsocial_saved(inputs)
	if (locale === "tr") return tr_kitsocial_saved(inputs)
	if (locale === "zh") return zh_kitsocial_saved(inputs)
	if (locale === "ja") return ja_kitsocial_saved(inputs)
	return en_kitsocial_saved(inputs)
});
