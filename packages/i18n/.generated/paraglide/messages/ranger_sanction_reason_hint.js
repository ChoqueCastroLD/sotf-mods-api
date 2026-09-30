/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Reason_HintInputs */

const en_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The user sees it. Be factual.`)
};

const es_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El usuario lo verá. Cíñete a los hechos.`)
};

const de_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Benutzer sieht sie. Bleib sachlich.`)
};

const fr_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’utilisateur le verra. Restez factuel.`)
};

const it_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’utente lo vedrà. Attieniti ai fatti.`)
};

const nl_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De gebruiker ziet dit. Houd het feitelijk.`)
};

const pl_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użytkownik go zobaczy. Trzymaj się faktów.`)
};

const pt_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O usuário vai ver. Atenha-se aos fatos.`)
};

const ru_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пользователь её увидит. Придерживайтесь фактов.`)
};

const sv_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användaren ser den. Håll dig till fakta.`)
};

const tr_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı bunu görür. Olgulara bağlı kalın.`)
};

const zh_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户会看到。请陈述事实。`)
};

const ja_ranger_sanction_reason_hint = /** @type {(inputs: Ranger_Sanction_Reason_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザーに表示されます。事実のみを書いてください。`)
};

/**
* | output |
* | --- |
* | "The user sees it. Be factual." |
*
* @param {Ranger_Sanction_Reason_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_reason_hint = /** @type {((inputs?: Ranger_Sanction_Reason_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Reason_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_reason_hint(inputs)
	if (locale === "de") return de_ranger_sanction_reason_hint(inputs)
	if (locale === "fr") return fr_ranger_sanction_reason_hint(inputs)
	if (locale === "it") return it_ranger_sanction_reason_hint(inputs)
	if (locale === "nl") return nl_ranger_sanction_reason_hint(inputs)
	if (locale === "pl") return pl_ranger_sanction_reason_hint(inputs)
	if (locale === "pt") return pt_ranger_sanction_reason_hint(inputs)
	if (locale === "ru") return ru_ranger_sanction_reason_hint(inputs)
	if (locale === "sv") return sv_ranger_sanction_reason_hint(inputs)
	if (locale === "tr") return tr_ranger_sanction_reason_hint(inputs)
	if (locale === "zh") return zh_ranger_sanction_reason_hint(inputs)
	if (locale === "ja") return ja_ranger_sanction_reason_hint(inputs)
	return en_ranger_sanction_reason_hint(inputs)
});
