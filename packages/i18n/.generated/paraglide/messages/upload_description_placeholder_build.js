/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Description_Placeholder_BuildInputs */

const en_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What it is, how to place it, anything players should know…`)
};

const es_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué es, cómo colocarla, lo que los jugadores deben saber…`)
};

const de_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was es ist, wie man es platziert, was Spieler wissen sollten…`)
};

const fr_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce que c’est, comment le placer, ce que les joueurs doivent savoir…`)
};

const it_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cos’è, come posizionarla, cosa devono sapere i giocatori…`)
};

const nl_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat het is, hoe je het plaatst, wat spelers moeten weten…`)
};

const pl_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czym jest, jak ją ustawić, co gracze powinni wiedzieć…`)
};

const pt_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que é, como posicionar, o que os jogadores devem saber…`)
};

const ru_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что это, как разместить, что нужно знать игрокам…`)
};

const sv_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vad det är, hur man placerar det, vad spelare bör veta…`)
};

const tr_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne olduğu, nasıl yerleştirileceği, oyuncuların bilmesi gerekenler…`)
};

const zh_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它是什么、怎么放置、玩家需要了解什么…`)
};

const ja_upload_description_placeholder_build = /** @type {(inputs: Upload_Description_Placeholder_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`どんな建築か、設置のしかた、知っておくべきこと…`)
};

/**
* | output |
* | --- |
* | "What it is, how to place it, anything players should know…" |
*
* @param {Upload_Description_Placeholder_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_description_placeholder_build = /** @type {((inputs?: Upload_Description_Placeholder_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Description_Placeholder_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_description_placeholder_build(inputs)
	if (locale === "de") return de_upload_description_placeholder_build(inputs)
	if (locale === "fr") return fr_upload_description_placeholder_build(inputs)
	if (locale === "it") return it_upload_description_placeholder_build(inputs)
	if (locale === "nl") return nl_upload_description_placeholder_build(inputs)
	if (locale === "pl") return pl_upload_description_placeholder_build(inputs)
	if (locale === "pt") return pt_upload_description_placeholder_build(inputs)
	if (locale === "ru") return ru_upload_description_placeholder_build(inputs)
	if (locale === "sv") return sv_upload_description_placeholder_build(inputs)
	if (locale === "tr") return tr_upload_description_placeholder_build(inputs)
	if (locale === "zh") return zh_upload_description_placeholder_build(inputs)
	if (locale === "ja") return ja_upload_description_placeholder_build(inputs)
	return en_upload_description_placeholder_build(inputs)
});
