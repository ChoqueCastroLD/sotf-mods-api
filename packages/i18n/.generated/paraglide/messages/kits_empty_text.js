/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Empty_TextInputs */

const en_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Be the first: pick your favourite mods, add a note to each and share the loadout with one code.`)
};

const es_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sé el primero: elige tus mods favoritos, añade una nota a cada uno y comparte el loadout con un código.`)
};

const de_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei die erste Person: Wähl deine Lieblingsmods, schreib zu jedem eine Notiz und teile das Loadout mit einem Code.`)
};

const fr_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soyez le premier : choisissez vos mods préférés, ajoutez une note à chacun et partagez le loadout avec un code.`)
};

const it_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sii il primo: scegli le tue mod preferite, aggiungi una nota a ciascuna e condividi il loadout con un codice.`)
};

const nl_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wees de eerste: kies je favoriete mods, zet bij elke mod een notitie en deel de loadout met één code.`)
};

const pl_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bądź pierwszy: wybierz ulubione mody, dodaj do każdego notatkę i udostępnij zestaw jednym kodem.`)
};

const pt_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seja o primeiro: escolha seus mods favoritos, adicione uma nota a cada um e compartilhe o loadout com um código.`)
};

const ru_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Станьте первым: выберите любимые моды, добавьте к каждому заметку и поделитесь набором по одному коду.`)
};

const sv_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bli först: välj dina favoritmoddar, skriv en anteckning till var och en och dela paketet med en kod.`)
};

const tr_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk sen ol: favori modlarını seç, her birine not ekle ve seti tek bir kodla paylaş.`)
};

const zh_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来做第一个吧：挑选你喜欢的模组，给每个写条备注，再用一个代码分享出去。`)
};

const ja_kits_empty_text = /** @type {(inputs: Kits_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のひとりになりましょう。お気に入りの MOD を選び、それぞれにメモを付けて、コードひとつで共有できます。`)
};

/**
* | output |
* | --- |
* | "Be the first: pick your favourite mods, add a note to each and share the loadout with one code." |
*
* @param {Kits_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_empty_text = /** @type {((inputs?: Kits_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_empty_text(inputs)
	if (locale === "de") return de_kits_empty_text(inputs)
	if (locale === "fr") return fr_kits_empty_text(inputs)
	if (locale === "it") return it_kits_empty_text(inputs)
	if (locale === "nl") return nl_kits_empty_text(inputs)
	if (locale === "pl") return pl_kits_empty_text(inputs)
	if (locale === "pt") return pt_kits_empty_text(inputs)
	if (locale === "ru") return ru_kits_empty_text(inputs)
	if (locale === "sv") return sv_kits_empty_text(inputs)
	if (locale === "tr") return tr_kits_empty_text(inputs)
	if (locale === "zh") return zh_kits_empty_text(inputs)
	if (locale === "ja") return ja_kits_empty_text(inputs)
	return en_kits_empty_text(inputs)
});
