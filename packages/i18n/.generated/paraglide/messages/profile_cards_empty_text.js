/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Cards_Empty_TextInputs */

const en_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} has not published anything here yet.`)
};

const es_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} todavía no ha publicado nada aquí.`)
};

const de_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hat hier noch nichts veröffentlicht.`)
};

const fr_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} n’a encore rien publié ici.`)
};

const it_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} non ha ancora pubblicato nulla qui.`)
};

const nl_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} heeft hier nog niets gepubliceerd.`)
};

const pl_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nie opublikował(a) tu jeszcze niczego.`)
};

const pt_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ainda não publicou nada aqui.`)
};

const ru_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ещё ничего здесь не опубликовал(а).`)
};

const sv_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} har inte publicerat något här än.`)
};

const tr_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} burada henüz bir şey yayınlamadı.`)
};

const zh_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 还没有在这里发布内容。`)
};

const ja_profile_cards_empty_text = /** @type {(inputs: Profile_Cards_Empty_TextInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} はまだここに何も公開していません。`)
};

/**
* | output |
* | --- |
* | "{name} has not published anything here yet." |
*
* @param {Profile_Cards_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_cards_empty_text = /** @type {((inputs: Profile_Cards_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Cards_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_cards_empty_text(inputs)
	if (locale === "de") return de_profile_cards_empty_text(inputs)
	if (locale === "fr") return fr_profile_cards_empty_text(inputs)
	if (locale === "it") return it_profile_cards_empty_text(inputs)
	if (locale === "nl") return nl_profile_cards_empty_text(inputs)
	if (locale === "pl") return pl_profile_cards_empty_text(inputs)
	if (locale === "pt") return pt_profile_cards_empty_text(inputs)
	if (locale === "ru") return ru_profile_cards_empty_text(inputs)
	if (locale === "sv") return sv_profile_cards_empty_text(inputs)
	if (locale === "tr") return tr_profile_cards_empty_text(inputs)
	if (locale === "zh") return zh_profile_cards_empty_text(inputs)
	if (locale === "ja") return ja_profile_cards_empty_text(inputs)
	return en_profile_cards_empty_text(inputs)
});
