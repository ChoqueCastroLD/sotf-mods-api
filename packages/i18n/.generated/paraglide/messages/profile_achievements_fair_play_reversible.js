/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Fair_Play_ReversibleInputs */

const en_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every XP point is recorded and can be reversed if it came from abuse.`)
};

const es_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada punto de XP queda registrado y puede revertirse si viene de un abuso.`)
};

const de_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder XP-Punkt wird protokolliert und kann bei Missbrauch zurückgenommen werden.`)
};

const fr_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque point d’XP est enregistré et peut être retiré en cas d’abus.`)
};

const it_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni punto XP viene registrato e può essere annullato in caso di abuso.`)
};

const nl_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elk XP-punt wordt vastgelegd en kan bij misbruik worden teruggedraaid.`)
};

const pl_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każdy punkt XP jest rejestrowany i może zostać cofnięty w razie nadużycia.`)
};

const pt_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada ponto de XP é registrado e pode ser revertido se vier de abuso.`)
};

const ru_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Каждое очко XP записывается и может быть отменено, если получено нечестно.`)
};

const sv_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje XP-poäng loggas och kan dras tillbaka vid missbruk.`)
};

const tr_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her XP puanı kaydedilir ve kötüye kullanımdan geldiyse geri alınabilir.`)
};

const zh_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每一点 XP 都有记录，若来自滥用可被撤销。`)
};

const ja_profile_achievements_fair_play_reversible = /** @type {(inputs: Profile_Achievements_Fair_Play_ReversibleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`XP はすべて記録され、不正によるものは取り消されることがあります。`)
};

/**
* | output |
* | --- |
* | "Every XP point is recorded and can be reversed if it came from abuse." |
*
* @param {Profile_Achievements_Fair_Play_ReversibleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_fair_play_reversible = /** @type {((inputs?: Profile_Achievements_Fair_Play_ReversibleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Fair_Play_ReversibleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_fair_play_reversible(inputs)
	if (locale === "de") return de_profile_achievements_fair_play_reversible(inputs)
	if (locale === "fr") return fr_profile_achievements_fair_play_reversible(inputs)
	if (locale === "it") return it_profile_achievements_fair_play_reversible(inputs)
	if (locale === "nl") return nl_profile_achievements_fair_play_reversible(inputs)
	if (locale === "pl") return pl_profile_achievements_fair_play_reversible(inputs)
	if (locale === "pt") return pt_profile_achievements_fair_play_reversible(inputs)
	if (locale === "ru") return ru_profile_achievements_fair_play_reversible(inputs)
	if (locale === "sv") return sv_profile_achievements_fair_play_reversible(inputs)
	if (locale === "tr") return tr_profile_achievements_fair_play_reversible(inputs)
	if (locale === "zh") return zh_profile_achievements_fair_play_reversible(inputs)
	if (locale === "ja") return ja_profile_achievements_fair_play_reversible(inputs)
	return en_profile_achievements_fair_play_reversible(inputs)
});
