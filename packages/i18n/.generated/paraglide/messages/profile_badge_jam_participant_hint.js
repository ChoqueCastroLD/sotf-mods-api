/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Jam_Participant_HintInputs */

const en_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a mod in a Mod Jam once its results are published. Can be earned again.`)
};

const es_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Presenta un mod en una Mod Jam cuando se publiquen sus resultados. Se puede ganar varias veces.`)
};

const de_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reiche einen Mod bei einer Mod Jam ein, sobald die Ergebnisse veröffentlicht sind. Kann mehrfach verdient werden.`)
};

const fr_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Présentez un mod à une Mod Jam une fois ses résultats publiés. Peut être obtenu plusieurs fois.`)
};

const it_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Presenta una mod a una Mod Jam quando i risultati sono pubblicati. Si può ottenere più volte.`)
};

const nl_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dien een mod in bij een Mod Jam zodra de resultaten zijn gepubliceerd. Kan meerdere keren worden verdiend.`)
};

const pl_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś moda do Mod Jam po opublikowaniu wyników. Można zdobyć wielokrotnie.`)
};

const pt_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscreva um mod numa Mod Jam depois de os resultados serem publicados. Pode ser ganho várias vezes.`)
};

const ru_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправьте мод на Mod Jam после публикации результатов. Можно получить несколько раз.`)
};

const sv_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka in en mod till en Mod Jam när resultaten har publicerats. Kan förtjänas flera gånger.`)
};

const tr_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçları yayımlanan bir Mod Jam'e mod gönder. Birden çok kez kazanılabilir.`)
};

const zh_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 Mod Jam 结果公布后，拥有一个参赛作品。可重复获得。`)
};

const ja_profile_badge_jam_participant_hint = /** @type {(inputs: Profile_Badge_Jam_Participant_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果が公開された Mod Jam にエントリーする。複数回獲得できます。`)
};

/**
* | output |
* | --- |
* | "Enter a mod in a Mod Jam once its results are published. Can be earned again." |
*
* @param {Profile_Badge_Jam_Participant_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_jam_participant_hint = /** @type {((inputs?: Profile_Badge_Jam_Participant_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Jam_Participant_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_jam_participant_hint(inputs)
	if (locale === "de") return de_profile_badge_jam_participant_hint(inputs)
	if (locale === "fr") return fr_profile_badge_jam_participant_hint(inputs)
	if (locale === "it") return it_profile_badge_jam_participant_hint(inputs)
	if (locale === "nl") return nl_profile_badge_jam_participant_hint(inputs)
	if (locale === "pl") return pl_profile_badge_jam_participant_hint(inputs)
	if (locale === "pt") return pt_profile_badge_jam_participant_hint(inputs)
	if (locale === "ru") return ru_profile_badge_jam_participant_hint(inputs)
	if (locale === "sv") return sv_profile_badge_jam_participant_hint(inputs)
	if (locale === "tr") return tr_profile_badge_jam_participant_hint(inputs)
	if (locale === "zh") return zh_profile_badge_jam_participant_hint(inputs)
	if (locale === "ja") return ja_profile_badge_jam_participant_hint(inputs)
	return en_profile_badge_jam_participant_hint(inputs)
});
