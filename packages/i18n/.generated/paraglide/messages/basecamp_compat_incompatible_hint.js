/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Incompatible_HintInputs */

const en_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods that break when installed together with this one. SotF Mods Manager warns players before installing either of them.`)
};

const es_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que fallan si se instalan junto con este. SotF Mods Manager avisa a los jugadores antes de instalar cualquiera de los dos.`)
};

const de_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, die zusammen mit diesem nicht funktionieren. SotF Mods Manager warnt Spieler vor der Installation.`)
};

const fr_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods qui ne fonctionnent pas avec celui-ci. SotF Mods Manager prévient les joueurs avant l’installation.`)
};

const it_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod che non funzionano insieme a questo. SotF Mods Manager avvisa i giocatori prima di installarli.`)
};

const nl_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods die niet samen met deze werken. SotF Mods Manager waarschuwt spelers voor de installatie.`)
};

const pl_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody, które psują się razem z tym. SotF Mods Manager ostrzega graczy przed instalacją.`)
};

const pt_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods que quebram quando instalados junto com este. O SotF Mods Manager avisa os jogadores antes de instalar.`)
};

const ru_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды, которые не работают вместе с этим. SotF Mods Manager предупреждает игроков перед установкой.`)
};

const sv_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar som inte fungerar tillsammans med den här. SotF Mods Manager varnar spelare innan installation.`)
};

const tr_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bununla birlikte kurulduğunda bozulan modlar. SotF Mods Manager kurulumdan önce oyuncuları uyarır.`)
};

const zh_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`与此模组一起安装会出问题的模组。SotF Mods Manager 会在安装前提醒玩家。`)
};

const ja_basecamp_compat_incompatible_hint = /** @type {(inputs: Basecamp_Compat_Incompatible_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このModと一緒に入れると動かないMod。SotF Mods Managerがインストール前に警告します。`)
};

/**
* | output |
* | --- |
* | "Mods that break when installed together with this one. SotF Mods Manager warns players before installing either of them." |
*
* @param {Basecamp_Compat_Incompatible_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_hint = /** @type {((inputs?: Basecamp_Compat_Incompatible_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_hint(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_hint(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_hint(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_hint(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_hint(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_hint(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_hint(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_hint(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_hint(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_hint(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_hint(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_hint(inputs)
	return en_basecamp_compat_incompatible_hint(inputs)
});
