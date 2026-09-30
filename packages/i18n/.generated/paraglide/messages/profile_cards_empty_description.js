/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Cards_Empty_DescriptionInputs */

const en_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hasn’t published anything here yet. Explore what the rest of the island made.`)
};

const es_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} todavía no ha publicado nada aquí. Explora lo que ha hecho el resto de la isla.`)
};

const de_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} hat hier noch nichts veröffentlicht. Sieh dir an, was der Rest der Insel gebaut hat.`)
};

const fr_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} n’a encore rien publié ici. Découvrez ce que le reste de l’île a créé.`)
};

const it_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} non ha ancora pubblicato nulla qui. Scopri cosa ha creato il resto dell’isola.`)
};

const nl_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} heeft hier nog niets gepubliceerd. Ontdek wat de rest van het eiland heeft gemaakt.`)
};

const pl_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} nie opublikował(a) tu jeszcze niczego. Zobacz, co stworzyła reszta wyspy.`)
};

const pt_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ainda não publicou nada aqui. Explore o que o resto da ilha criou.`)
};

const ru_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ещё ничего здесь не опубликовал(а). Посмотрите, что сделали другие жители острова.`)
};

const sv_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} har inte publicerat något här än. Utforska vad resten av ön har gjort.`)
};

const tr_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} burada henüz bir şey yayınlamadı. Adanın geri kalanının neler yaptığını keşfet.`)
};

const zh_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 还没有在这里发布内容。去看看岛上其他人的作品吧。`)
};

const ja_profile_cards_empty_description = /** @type {(inputs: Profile_Cards_Empty_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} はまだここに何も公開していません。島のほかの人たちの作品を見てみましょう。`)
};

/**
* | output |
* | --- |
* | "{name} hasn’t published anything here yet. Explore what the rest of the island made." |
*
* @param {Profile_Cards_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_cards_empty_description = /** @type {((inputs: Profile_Cards_Empty_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Cards_Empty_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_cards_empty_description(inputs)
	if (locale === "de") return de_profile_cards_empty_description(inputs)
	if (locale === "fr") return fr_profile_cards_empty_description(inputs)
	if (locale === "it") return it_profile_cards_empty_description(inputs)
	if (locale === "nl") return nl_profile_cards_empty_description(inputs)
	if (locale === "pl") return pl_profile_cards_empty_description(inputs)
	if (locale === "pt") return pt_profile_cards_empty_description(inputs)
	if (locale === "ru") return ru_profile_cards_empty_description(inputs)
	if (locale === "sv") return sv_profile_cards_empty_description(inputs)
	if (locale === "tr") return tr_profile_cards_empty_description(inputs)
	if (locale === "zh") return zh_profile_cards_empty_description(inputs)
	if (locale === "ja") return ja_profile_cards_empty_description(inputs)
	return en_profile_cards_empty_description(inputs)
});
