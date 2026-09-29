/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Not_Found_TextInputs */

const en_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This page isn’t on our map. Something in the trees is watching — let’s get you back.`)
};

const es_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta página no está en nuestro mapa. Algo te observa entre los árboles; volvamos al camino.`)
};

const de_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Seite ist nicht auf unserer Karte. Etwas beobachtet dich zwischen den Bäumen – lass uns zurückgehen.`)
};

const fr_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette page n’est pas sur notre carte. Quelque chose vous observe entre les arbres : revenons sur le chemin.`)
};

const it_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa pagina non è sulla nostra mappa. Qualcosa ti osserva tra gli alberi: torniamo sul sentiero.`)
};

const nl_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze pagina staat niet op onze kaart. Iets tussen de bomen houdt je in de gaten — we brengen je terug.`)
};

const pl_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tej strony nie ma na naszej mapie. Coś obserwuje cię spomiędzy drzew — wracajmy na szlak.`)
};

const pt_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta página não está no nosso mapa. Algo está observando você entre as árvores — vamos voltar.`)
};

const ru_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этой страницы нет на нашей карте. Кто-то наблюдает за вами из-за деревьев — давайте вернёмся.`)
};

const sv_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här sidan finns inte på vår karta. Något bland träden iakttar dig – vi tar oss tillbaka.`)
};

const tr_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sayfa haritamızda yok. Ağaçların arasından bir şey seni izliyor; hadi geri dönelim.`)
};

const zh_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这个页面不在我们的地图上。林间有什么在盯着你——我们回去吧。`)
};

const ja_errors_not_found_text = /** @type {(inputs: Errors_Not_Found_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このページは地図にありません。木々の間から何かがこちらを見ています。道に戻りましょう。`)
};

/**
* | output |
* | --- |
* | "This page isn’t on our map. Something in the trees is watching — let’s get you back." |
*
* @param {Errors_Not_Found_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_not_found_text = /** @type {((inputs?: Errors_Not_Found_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Not_Found_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_not_found_text(inputs)
	if (locale === "de") return de_errors_not_found_text(inputs)
	if (locale === "fr") return fr_errors_not_found_text(inputs)
	if (locale === "it") return it_errors_not_found_text(inputs)
	if (locale === "nl") return nl_errors_not_found_text(inputs)
	if (locale === "pl") return pl_errors_not_found_text(inputs)
	if (locale === "pt") return pt_errors_not_found_text(inputs)
	if (locale === "ru") return ru_errors_not_found_text(inputs)
	if (locale === "sv") return sv_errors_not_found_text(inputs)
	if (locale === "tr") return tr_errors_not_found_text(inputs)
	if (locale === "zh") return zh_errors_not_found_text(inputs)
	if (locale === "ja") return ja_errors_not_found_text(inputs)
	return en_errors_not_found_text(inputs)
});
