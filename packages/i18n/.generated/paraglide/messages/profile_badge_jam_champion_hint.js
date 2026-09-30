/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Jam_Champion_HintInputs */

const en_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Win a Mod Jam overall. Can be earned again.`)
};

const es_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gana una Mod Jam en la clasificación general. Se puede ganar varias veces.`)
};

const de_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gewinne eine Mod Jam in der Gesamtwertung. Kann mehrfach verdient werden.`)
};

const fr_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remportez une Mod Jam au classement général. Peut être obtenu plusieurs fois.`)
};

const it_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vinci una Mod Jam nella classifica generale. Si può ottenere più volte.`)
};

const nl_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Win een Mod Jam in het algemeen klassement. Kan meerdere keren worden verdiend.`)
};

const pl_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wygraj Mod Jam w klasyfikacji generalnej. Można zdobyć wielokrotnie.`)
};

const pt_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vença uma Mod Jam na classificação geral. Pode ser ganho várias vezes.`)
};

const ru_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выиграйте Mod Jam в общем зачёте. Можно получить несколько раз.`)
};

const sv_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vinn en Mod Jam sammanlagt. Kan förtjänas flera gånger.`)
};

const tr_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir Mod Jam'i genel klasmanda kazan. Birden çok kez kazanılabilir.`)
};

const zh_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 Mod Jam 中获得总冠军。可重复获得。`)
};

const ja_profile_badge_jam_champion_hint = /** @type {(inputs: Profile_Badge_Jam_Champion_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam の総合で優勝する。複数回獲得できます。`)
};

/**
* | output |
* | --- |
* | "Win a Mod Jam overall. Can be earned again." |
*
* @param {Profile_Badge_Jam_Champion_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_jam_champion_hint = /** @type {((inputs?: Profile_Badge_Jam_Champion_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Jam_Champion_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_jam_champion_hint(inputs)
	if (locale === "de") return de_profile_badge_jam_champion_hint(inputs)
	if (locale === "fr") return fr_profile_badge_jam_champion_hint(inputs)
	if (locale === "it") return it_profile_badge_jam_champion_hint(inputs)
	if (locale === "nl") return nl_profile_badge_jam_champion_hint(inputs)
	if (locale === "pl") return pl_profile_badge_jam_champion_hint(inputs)
	if (locale === "pt") return pt_profile_badge_jam_champion_hint(inputs)
	if (locale === "ru") return ru_profile_badge_jam_champion_hint(inputs)
	if (locale === "sv") return sv_profile_badge_jam_champion_hint(inputs)
	if (locale === "tr") return tr_profile_badge_jam_champion_hint(inputs)
	if (locale === "zh") return zh_profile_badge_jam_champion_hint(inputs)
	if (locale === "ja") return ja_profile_badge_jam_champion_hint(inputs)
	return en_profile_badge_jam_champion_hint(inputs)
});
