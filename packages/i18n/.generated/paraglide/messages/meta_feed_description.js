/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Feed_DescriptionInputs */

const en_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The latest Sons of the Forest mods and updates published on SOTF Mods.`)
};

const es_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los últimos mods y actualizaciones de Sons of the Forest publicados en SOTF Mods.`)
};

const de_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die neuesten Mods und Updates für Sons of the Forest auf SOTF Mods.`)
};

const fr_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les derniers mods et mises à jour de Sons of the Forest publiés sur SOTF Mods.`)
};

const it_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le ultime mod e gli ultimi aggiornamenti per Sons of the Forest pubblicati su SOTF Mods.`)
};

const nl_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De nieuwste mods en updates voor Sons of the Forest op SOTF Mods.`)
};

const pl_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze mody i aktualizacje do Sons of the Forest opublikowane na SOTF Mods.`)
};

const pt_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os mods e atualizações mais recentes de Sons of the Forest publicados no SOTF Mods.`)
};

const ru_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Свежие моды и обновления для Sons of the Forest на SOTF Mods.`)
};

const sv_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De senaste moddarna och uppdateringarna till Sons of the Forest på SOTF Mods.`)
};

const tr_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’ta yayınlanan en yeni Sons of the Forest modları ve güncellemeleri.`)
};

const zh_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 上最新发布的《森林之子》模组与更新。`)
};

const ja_meta_feed_description = /** @type {(inputs: Meta_Feed_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods で公開された Sons of the Forest の最新の MOD とアップデート。`)
};

/**
* | output |
* | --- |
* | "The latest Sons of the Forest mods and updates published on SOTF Mods." |
*
* @param {Meta_Feed_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_feed_description = /** @type {((inputs?: Meta_Feed_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Feed_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_feed_description(inputs)
	if (locale === "de") return de_meta_feed_description(inputs)
	if (locale === "fr") return fr_meta_feed_description(inputs)
	if (locale === "it") return it_meta_feed_description(inputs)
	if (locale === "nl") return nl_meta_feed_description(inputs)
	if (locale === "pl") return pl_meta_feed_description(inputs)
	if (locale === "pt") return pt_meta_feed_description(inputs)
	if (locale === "ru") return ru_meta_feed_description(inputs)
	if (locale === "sv") return sv_meta_feed_description(inputs)
	if (locale === "tr") return tr_meta_feed_description(inputs)
	if (locale === "zh") return zh_meta_feed_description(inputs)
	if (locale === "ja") return ja_meta_feed_description(inputs)
	return en_meta_feed_description(inputs)
});
