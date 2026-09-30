/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Nsfw_HintInputs */

const en_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hidden from players who did not opt in.`)
};

const es_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se oculta a los jugadores que no lo han activado.`)
};

const de_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für Spieler ausgeblendet, die das nicht aktiviert haben.`)
};

const fr_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masqué pour les joueurs qui ne l’ont pas activé.`)
};

const it_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascosta ai giocatori che non l’hanno attivato.`)
};

const nl_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen voor spelers die dit niet hebben ingeschakeld.`)
};

const pl_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryte przed graczami, którzy ich nie włączyli.`)
};

const pt_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto para jogadores que não ativaram essa opção.`)
};

const ru_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыт от игроков, которые его не включили.`)
};

const sv_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dolt för spelare som inte har slagit på det.`)
};

const tr_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bunu açmamış oyunculardan gizlenir.`)
};

const zh_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`对未开启此选项的玩家隐藏。`)
};

const ja_basecamp_listing_nsfw_hint = /** @type {(inputs: Basecamp_Listing_Nsfw_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効にしていないプレイヤーには表示されません。`)
};

/**
* | output |
* | --- |
* | "Hidden from players who did not opt in." |
*
* @param {Basecamp_Listing_Nsfw_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_nsfw_hint = /** @type {((inputs?: Basecamp_Listing_Nsfw_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Nsfw_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_nsfw_hint(inputs)
	if (locale === "de") return de_basecamp_listing_nsfw_hint(inputs)
	if (locale === "fr") return fr_basecamp_listing_nsfw_hint(inputs)
	if (locale === "it") return it_basecamp_listing_nsfw_hint(inputs)
	if (locale === "nl") return nl_basecamp_listing_nsfw_hint(inputs)
	if (locale === "pl") return pl_basecamp_listing_nsfw_hint(inputs)
	if (locale === "pt") return pt_basecamp_listing_nsfw_hint(inputs)
	if (locale === "ru") return ru_basecamp_listing_nsfw_hint(inputs)
	if (locale === "sv") return sv_basecamp_listing_nsfw_hint(inputs)
	if (locale === "tr") return tr_basecamp_listing_nsfw_hint(inputs)
	if (locale === "zh") return zh_basecamp_listing_nsfw_hint(inputs)
	if (locale === "ja") return ja_basecamp_listing_nsfw_hint(inputs)
	return en_basecamp_listing_nsfw_hint(inputs)
});
