/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_No_Broken_TextInputs */

const en_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None of your mods is reported broken on the current game build.`)
};

const es_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguno de tus mods aparece roto en la build actual del juego.`)
};

const de_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keiner deiner Mods wird auf dem aktuellen Spiel-Build als kaputt gemeldet.`)
};

const fr_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun de vos mods n’est signalé comme cassé sur la build actuelle du jeu.`)
};

const it_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna delle tue mod risulta non funzionante sulla build attuale del gioco.`)
};

const nl_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen van je mods wordt als kapot gemeld op de huidige game-build.`)
};

const pl_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żaden z twoich modów nie jest zgłaszany jako niedziałający na bieżącym buildzie gry.`)
};

const pt_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum dos seus mods é relatado como quebrado na build atual do jogo.`)
};

const ru_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ни один из ваших модов не отмечен как неработающий на текущей сборке игры.`)
};

const sv_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen av dina moddar rapporteras som trasig på det aktuella spelbygget.`)
};

const tr_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarının hiçbiri güncel oyun sürümünde bozuk olarak bildirilmiyor.`)
};

const zh_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组在当前游戏版本上都没有被报告失效。`)
};

const ja_me_backpack_no_broken_text = /** @type {(inputs: Me_Backpack_No_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのMODはどれも現在のゲームビルドで動作しないとは報告されていません。`)
};

/**
* | output |
* | --- |
* | "None of your mods is reported broken on the current game build." |
*
* @param {Me_Backpack_No_Broken_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_no_broken_text = /** @type {((inputs?: Me_Backpack_No_Broken_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_No_Broken_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_no_broken_text(inputs)
	if (locale === "de") return de_me_backpack_no_broken_text(inputs)
	if (locale === "fr") return fr_me_backpack_no_broken_text(inputs)
	if (locale === "it") return it_me_backpack_no_broken_text(inputs)
	if (locale === "nl") return nl_me_backpack_no_broken_text(inputs)
	if (locale === "pl") return pl_me_backpack_no_broken_text(inputs)
	if (locale === "pt") return pt_me_backpack_no_broken_text(inputs)
	if (locale === "ru") return ru_me_backpack_no_broken_text(inputs)
	if (locale === "sv") return sv_me_backpack_no_broken_text(inputs)
	if (locale === "tr") return tr_me_backpack_no_broken_text(inputs)
	if (locale === "zh") return zh_me_backpack_no_broken_text(inputs)
	if (locale === "ja") return ja_me_backpack_no_broken_text(inputs)
	return en_me_backpack_no_broken_text(inputs)
});
