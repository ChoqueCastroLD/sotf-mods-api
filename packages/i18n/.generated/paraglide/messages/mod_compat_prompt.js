/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Mod_Compat_PromptInputs */

const en_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Did v${i?.version} work in your game?`)
};

const es_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Te funcionó la v${i?.version} en tu partida?`)
};

const de_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hat v${i?.version} in deinem Spiel funktioniert?`)
};

const fr_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La v${i?.version} a-t-elle fonctionné dans votre partie ?`)
};

const it_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La v${i?.version} ha funzionato nella tua partita?`)
};

const nl_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Werkte v${i?.version} in je game?`)
};

const pl_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Czy v${i?.version} działała w twojej grze?`)
};

const pt_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A v${i?.version} funcionou no seu jogo?`)
};

const ru_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Сработала ли v${i?.version} в вашей игре?`)
};

const sv_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fungerade v${i?.version} i ditt spel?`)
};

const tr_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} oyununda çalıştı mı?`)
};

const zh_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} 在你的游戏里能用吗？`)
};

const ja_mod_compat_prompt = /** @type {(inputs: Mod_Compat_PromptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} はゲームで動きましたか？`)
};

/**
* | output |
* | --- |
* | "Did v{version} work in your game?" |
*
* @param {Mod_Compat_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_compat_prompt = /** @type {((inputs: Mod_Compat_PromptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Compat_PromptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_compat_prompt(inputs)
	if (locale === "de") return de_mod_compat_prompt(inputs)
	if (locale === "fr") return fr_mod_compat_prompt(inputs)
	if (locale === "it") return it_mod_compat_prompt(inputs)
	if (locale === "nl") return nl_mod_compat_prompt(inputs)
	if (locale === "pl") return pl_mod_compat_prompt(inputs)
	if (locale === "pt") return pt_mod_compat_prompt(inputs)
	if (locale === "ru") return ru_mod_compat_prompt(inputs)
	if (locale === "sv") return sv_mod_compat_prompt(inputs)
	if (locale === "tr") return tr_mod_compat_prompt(inputs)
	if (locale === "zh") return zh_mod_compat_prompt(inputs)
	if (locale === "ja") return ja_mod_compat_prompt(inputs)
	return en_mod_compat_prompt(inputs)
});
