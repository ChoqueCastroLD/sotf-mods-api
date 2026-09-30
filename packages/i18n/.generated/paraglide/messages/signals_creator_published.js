/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, kind: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Creator_PublishedInputs */

const en_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} published the build ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} published ${i?.mod}`)
	
};

const es_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} ha publicado la build ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} ha publicado ${i?.mod}`)
	
};

const de_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} hat den Build ${i?.mod} veröffentlicht`);
	return /** @type {LocalizedString} */ (`${i?.actor} hat ${i?.mod} veröffentlicht`)
	
};

const fr_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} a publié la build ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} a publié ${i?.mod}`)
	
};

const it_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} ha pubblicato la build ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} ha pubblicato ${i?.mod}`)
	
};

const nl_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} heeft de build ${i?.mod} gepubliceerd`);
	return /** @type {LocalizedString} */ (`${i?.actor} heeft ${i?.mod} gepubliceerd`)
	
};

const pl_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} opublikował(a) build ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} opublikował(a) ${i?.mod}`)
	
};

const pt_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} publicou a build ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} publicou ${i?.mod}`)
	
};

const ru_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} опубликовал(а) постройку ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} опубликовал(а) ${i?.mod}`)
	
};

const sv_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} publicerade bygget ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} publicerade ${i?.mod}`)
	
};

const tr_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} ${i?.mod} yapısını yayımladı`);
	return /** @type {LocalizedString} */ (`${i?.actor} ${i?.mod} modunu yayımladı`)
	
};

const zh_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} 发布了建筑 ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} 发布了${i?.mod}`)
	
};

const ja_signals_creator_published = /** @type {(inputs: Signals_Creator_PublishedInputs) => LocalizedString} */ (i) => {
	if (i?.kind === "build") return /** @type {LocalizedString} */ (`${i?.actor} が建築 ${i?.mod}を公開しました`);
	return /** @type {LocalizedString} */ (`${i?.actor} が${i?.mod}を公開しました`)
	
};

/**
* | kind | output |
* | --- | --- |
* | "build" | "{actor} published the build {mod}" |
* | * | "{actor} published {mod}" |
*
* @param {Signals_Creator_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_creator_published = /** @type {((inputs: Signals_Creator_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Creator_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_creator_published(inputs)
	if (locale === "de") return de_signals_creator_published(inputs)
	if (locale === "fr") return fr_signals_creator_published(inputs)
	if (locale === "it") return it_signals_creator_published(inputs)
	if (locale === "nl") return nl_signals_creator_published(inputs)
	if (locale === "pl") return pl_signals_creator_published(inputs)
	if (locale === "pt") return pt_signals_creator_published(inputs)
	if (locale === "ru") return ru_signals_creator_published(inputs)
	if (locale === "sv") return sv_signals_creator_published(inputs)
	if (locale === "tr") return tr_signals_creator_published(inputs)
	if (locale === "zh") return zh_signals_creator_published(inputs)
	if (locale === "ja") return ja_signals_creator_published(inputs)
	return en_signals_creator_published(inputs)
});
