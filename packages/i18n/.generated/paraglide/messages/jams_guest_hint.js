/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Guest_HintInputs */

const en_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in to submit an entry, follow this jam and vote.`)
};

const es_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inicia sesión para participar, seguir este jam y votar.`)
};

const de_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melde dich an, um einen Beitrag einzureichen, diesem Jam zu folgen und abzustimmen.`)
};

const fr_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez-vous pour participer, suivre ce jam et voter.`)
};

const it_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accedi per iscriverti, seguire questo jam e votare.`)
};

const nl_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log in om in te zenden, deze jam te volgen en te stemmen.`)
};

const pl_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaloguj się, aby zgłosić pracę, obserwować ten jam i głosować.`)
};

const pt_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entre para participar, seguir este jam e votar.`)
};

const ru_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Войдите, чтобы отправить работу, следить за джемом и голосовать.`)
};

const sv_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logga in för att skicka in bidrag, följa den här jammen och rösta.`)
};

const tr_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru yapmak, bu jam'i takip etmek ve oy vermek için giriş yapın.`)
};

const zh_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登录后即可投稿、关注本场 Jam 并投票。`)
};

const ja_jams_guest_hint = /** @type {(inputs: Jams_Guest_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログインすると、応募・フォロー・投票ができます。`)
};

/**
* | output |
* | --- |
* | "Log in to submit an entry, follow this jam and vote." |
*
* @param {Jams_Guest_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_guest_hint = /** @type {((inputs?: Jams_Guest_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Guest_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_guest_hint(inputs)
	if (locale === "de") return de_jams_guest_hint(inputs)
	if (locale === "fr") return fr_jams_guest_hint(inputs)
	if (locale === "it") return it_jams_guest_hint(inputs)
	if (locale === "nl") return nl_jams_guest_hint(inputs)
	if (locale === "pl") return pl_jams_guest_hint(inputs)
	if (locale === "pt") return pt_jams_guest_hint(inputs)
	if (locale === "ru") return ru_jams_guest_hint(inputs)
	if (locale === "sv") return sv_jams_guest_hint(inputs)
	if (locale === "tr") return tr_jams_guest_hint(inputs)
	if (locale === "zh") return zh_jams_guest_hint(inputs)
	if (locale === "ja") return ja_jams_guest_hint(inputs)
	return en_jams_guest_hint(inputs)
});
