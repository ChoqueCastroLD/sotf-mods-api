/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Live_Embed_IntroInputs */

const en_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste a badge in a README, forum post or Discord. They update by themselves.`)
};

const es_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pega una insignia en un README, foro o Discord. Se actualizan solas.`)
};

const de_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge ein Badge in ein README, Forum oder Discord ein. Sie aktualisieren sich selbst.`)
};

const fr_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collez un badge dans un README, un forum ou Discord. Ils se mettent à jour seuls.`)
};

const it_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incolla un badge in un README, forum o Discord. Si aggiornano da soli.`)
};

const nl_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plak een badge in een README, forum of Discord. Ze werken zichzelf bij.`)
};

const pl_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wklej odznakę do README, na forum lub Discorda. Aktualizują się same.`)
};

const pt_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cole um emblema em um README, fórum ou Discord. Eles se atualizam sozinhos.`)
};

const ru_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вставьте значок в README, на форум или в Discord. Они обновляются сами.`)
};

const sv_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klistra in ett märke i en README, ett forum eller Discord. De uppdateras av sig själva.`)
};

const tr_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozeti README, forum veya Discord'a yapıştır. Kendiliğinden güncellenir.`)
};

const zh_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可将徽章粘贴到 README、论坛或 Discord，会自动更新。`)
};

const ja_live_embed_intro = /** @type {(inputs: Live_Embed_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`READMEやフォーラム、Discordにバッジを貼れます。自動で更新されます。`)
};

/**
* | output |
* | --- |
* | "Paste a badge in a README, forum post or Discord. They update by themselves." |
*
* @param {Live_Embed_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_embed_intro = /** @type {((inputs?: Live_Embed_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_embed_intro(inputs)
	if (locale === "de") return de_live_embed_intro(inputs)
	if (locale === "fr") return fr_live_embed_intro(inputs)
	if (locale === "it") return it_live_embed_intro(inputs)
	if (locale === "nl") return nl_live_embed_intro(inputs)
	if (locale === "pl") return pl_live_embed_intro(inputs)
	if (locale === "pt") return pt_live_embed_intro(inputs)
	if (locale === "ru") return ru_live_embed_intro(inputs)
	if (locale === "sv") return sv_live_embed_intro(inputs)
	if (locale === "tr") return tr_live_embed_intro(inputs)
	if (locale === "zh") return zh_live_embed_intro(inputs)
	if (locale === "ja") return ja_live_embed_intro(inputs)
	return en_live_embed_intro(inputs)
});
