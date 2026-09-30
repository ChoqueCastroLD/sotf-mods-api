/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Badges_None_TextInputs */

const en_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publishing, answering players and keeping mods working on new patches all earn badges.`)
};

const es_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar, responder a los jugadores y mantener los mods funcionando tras cada parche dan insignias.`)
};

const de_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlichen, Spielern antworten und Mods nach jedem Patch am Laufen halten bringt Abzeichen.`)
};

const fr_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier, répondre aux joueurs et garder vos mods fonctionnels après chaque patch rapporte des badges.`)
};

const it_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicare, rispondere ai giocatori e mantenere le mod funzionanti dopo ogni patch fa guadagnare distintivi.`)
};

const nl_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiceren, spelers antwoorden en mods na elke patch werkend houden leveren badges op.`)
};

const pl_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publikowanie, odpowiadanie graczom i utrzymywanie modów po każdej łatce daje odznaki.`)
};

const pt_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar, responder aos jogadores e manter os mods funcionando depois de cada patch rende insígnias.`)
};

const ru_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Публикация модов, ответы игрокам и поддержка модов после каждого патча приносят значки.`)
};

const sv_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Att publicera, svara spelare och hålla moddar igång efter varje patch ger märken.`)
};

const tr_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlamak, oyunculara yanıt vermek ve modları her yamadan sonra çalışır tutmak rozet kazandırır.`)
};

const zh_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布模组、回复玩家、在每次补丁后保持模组可用，都能获得徽章。`)
};

const ja_basecamp_badges_none_text = /** @type {(inputs: Basecamp_Badges_None_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開、プレイヤーへの返信、パッチごとの MOD の動作維持でバッジを獲得できます。`)
};

/**
* | output |
* | --- |
* | "Publishing, answering players and keeping mods working on new patches all earn badges." |
*
* @param {Basecamp_Badges_None_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_badges_none_text = /** @type {((inputs?: Basecamp_Badges_None_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_None_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_badges_none_text(inputs)
	if (locale === "de") return de_basecamp_badges_none_text(inputs)
	if (locale === "fr") return fr_basecamp_badges_none_text(inputs)
	if (locale === "it") return it_basecamp_badges_none_text(inputs)
	if (locale === "nl") return nl_basecamp_badges_none_text(inputs)
	if (locale === "pl") return pl_basecamp_badges_none_text(inputs)
	if (locale === "pt") return pt_basecamp_badges_none_text(inputs)
	if (locale === "ru") return ru_basecamp_badges_none_text(inputs)
	if (locale === "sv") return sv_basecamp_badges_none_text(inputs)
	if (locale === "tr") return tr_basecamp_badges_none_text(inputs)
	if (locale === "zh") return zh_basecamp_badges_none_text(inputs)
	if (locale === "ja") return ja_basecamp_badges_none_text(inputs)
	return en_basecamp_badges_none_text(inputs)
});
