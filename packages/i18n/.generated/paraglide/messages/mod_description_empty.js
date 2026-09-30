/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Description_EmptyInputs */

const en_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The creator hasn’t written a description yet.`)
};

const es_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El creador todavía no ha escrito una descripción.`)
};

const de_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Ersteller hat noch keine Beschreibung geschrieben.`)
};

const fr_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le créateur n’a pas encore écrit de description.`)
};

const it_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il creatore non ha ancora scritto una descrizione.`)
};

const nl_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De maker heeft nog geen beschrijving geschreven.`)
};

const pl_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca nie napisał jeszcze opisu.`)
};

const pt_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O criador ainda não escreveu uma descrição.`)
};

const ru_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор ещё не написал описание.`)
};

const sv_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparen har inte skrivit någon beskrivning än.`)
};

const tr_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı henüz bir açıklama yazmadı.`)
};

const zh_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者还没有写简介。`)
};

const ja_mod_description_empty = /** @type {(inputs: Mod_Description_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者はまだ説明を書いていません。`)
};

/**
* | output |
* | --- |
* | "The creator hasn’t written a description yet." |
*
* @param {Mod_Description_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_description_empty = /** @type {((inputs?: Mod_Description_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Description_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_description_empty(inputs)
	if (locale === "de") return de_mod_description_empty(inputs)
	if (locale === "fr") return fr_mod_description_empty(inputs)
	if (locale === "it") return it_mod_description_empty(inputs)
	if (locale === "nl") return nl_mod_description_empty(inputs)
	if (locale === "pl") return pl_mod_description_empty(inputs)
	if (locale === "pt") return pt_mod_description_empty(inputs)
	if (locale === "ru") return ru_mod_description_empty(inputs)
	if (locale === "sv") return sv_mod_description_empty(inputs)
	if (locale === "tr") return tr_mod_description_empty(inputs)
	if (locale === "zh") return zh_mod_description_empty(inputs)
	if (locale === "ja") return ja_mod_description_empty(inputs)
	return en_mod_description_empty(inputs)
});
