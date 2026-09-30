/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Notes_EmptyInputs */

const en_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No updates yet. Creators are still out in the woods.`)
};

const es_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay actualizaciones. Los creadores siguen en el bosque.`)
};

const de_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Updates. Die Ersteller sind noch im Wald unterwegs.`)
};

const fr_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de mises à jour. Les créateurs sont encore dans les bois.`)
};

const it_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun aggiornamento. I creatori sono ancora nel bosco.`)
};

const nl_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen updates. De makers zijn nog in het bos.`)
};

const pl_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze brak aktualizacji. Twórcy są wciąż w lesie.`)
};

const pt_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma atualização ainda. Os criadores ainda estão na floresta.`)
};

const ru_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновлений пока нет. Авторы ещё в лесу.`)
};

const sv_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga uppdateringar än. Skaparna är fortfarande ute i skogen.`)
};

const tr_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz güncelleme yok. Yapımcılar hâlâ ormanda.`)
};

const zh_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有更新。创作者们还在林子里。`)
};

const ja_landing_notes_empty = /** @type {(inputs: Landing_Notes_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだアップデートはありません。クリエイターたちはまだ森の中です。`)
};

/**
* | output |
* | --- |
* | "No updates yet. Creators are still out in the woods." |
*
* @param {Landing_Notes_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_notes_empty = /** @type {((inputs?: Landing_Notes_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Notes_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_notes_empty(inputs)
	if (locale === "de") return de_landing_notes_empty(inputs)
	if (locale === "fr") return fr_landing_notes_empty(inputs)
	if (locale === "it") return it_landing_notes_empty(inputs)
	if (locale === "nl") return nl_landing_notes_empty(inputs)
	if (locale === "pl") return pl_landing_notes_empty(inputs)
	if (locale === "pt") return pt_landing_notes_empty(inputs)
	if (locale === "ru") return ru_landing_notes_empty(inputs)
	if (locale === "sv") return sv_landing_notes_empty(inputs)
	if (locale === "tr") return tr_landing_notes_empty(inputs)
	if (locale === "zh") return zh_landing_notes_empty(inputs)
	if (locale === "ja") return ja_landing_notes_empty(inputs)
	return en_landing_notes_empty(inputs)
});
