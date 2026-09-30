/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ minDays: NonNullable<unknown> }} Jams_Voting_RulesInputs */

const en_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("en", i?.minDays, {});
	const minDays__number = registry.number("en", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Only verified accounts at least ${minDays__number} day old can vote, and never for their own entries.`);
	return /** @type {LocalizedString} */ (`Only verified accounts at least ${minDays__number} days old can vote, and never for their own entries.`)
	
};

const es_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("es", i?.minDays, {});
	const minDays__number = registry.number("es", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Solo pueden votar cuentas verificadas con al menos ${minDays__number} día de antigüedad, y nunca por sus propias participaciones.`);
	return /** @type {LocalizedString} */ (`Solo pueden votar cuentas verificadas con al menos ${minDays__number} días de antigüedad, y nunca por sus propias participaciones.`)
	
};

const de_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("de", i?.minDays, {});
	const minDays__number = registry.number("de", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Nur verifizierte Konten, die mindestens ${minDays__number} Tag alt sind, dürfen abstimmen, nie für eigene Beiträge.`);
	return /** @type {LocalizedString} */ (`Nur verifizierte Konten, die mindestens ${minDays__number} Tage alt sind, dürfen abstimmen, nie für eigene Beiträge.`)
	
};

const fr_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("fr", i?.minDays, {});
	const minDays__number = registry.number("fr", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Seuls les comptes vérifiés d'au moins ${minDays__number} jour peuvent voter, jamais pour leurs propres participations.`);
	return /** @type {LocalizedString} */ (`Seuls les comptes vérifiés d'au moins ${minDays__number} jours peuvent voter, jamais pour leurs propres participations.`)
	
};

const it_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("it", i?.minDays, {});
	const minDays__number = registry.number("it", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Possono votare solo account verificati con almeno ${minDays__number} giorno di anzianità, mai per le proprie iscrizioni.`);
	return /** @type {LocalizedString} */ (`Possono votare solo account verificati con almeno ${minDays__number} giorni di anzianità, mai per le proprie iscrizioni.`)
	
};

const nl_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("nl", i?.minDays, {});
	const minDays__number = registry.number("nl", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Alleen geverifieerde accounts van minstens ${minDays__number} dag oud mogen stemmen, nooit op hun eigen inzendingen.`);
	return /** @type {LocalizedString} */ (`Alleen geverifieerde accounts van minstens ${minDays__number} dagen oud mogen stemmen, nooit op hun eigen inzendingen.`)
	
};

const pl_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("pl", i?.minDays, {});
	const minDays__number = registry.number("pl", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Głosować mogą tylko zweryfikowane konta mające co najmniej ${minDays__number} dzień, nigdy na własne zgłoszenia.`);
	if (minDays__plural === "few") return /** @type {LocalizedString} */ (`Głosować mogą tylko zweryfikowane konta mające co najmniej ${minDays__number} dni, nigdy na własne zgłoszenia.`);
	if (minDays__plural === "many") return /** @type {LocalizedString} */ (`Głosować mogą tylko zweryfikowane konta mające co najmniej ${minDays__number} dni, nigdy na własne zgłoszenia.`);
	return /** @type {LocalizedString} */ (`Głosować mogą tylko zweryfikowane konta mające co najmniej ${minDays__number} dnia, nigdy na własne zgłoszenia.`)
	
};

const pt_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("pt", i?.minDays, {});
	const minDays__number = registry.number("pt", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Só contas verificadas com pelo menos ${minDays__number} dia podem votar, e nunca nas próprias inscrições.`);
	return /** @type {LocalizedString} */ (`Só contas verificadas com pelo menos ${minDays__number} dias podem votar, e nunca nas próprias inscrições.`)
	
};

const ru_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("ru", i?.minDays, {});
	const minDays__number = registry.number("ru", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Голосовать могут только подтверждённые аккаунты старше ${minDays__number} дня, и никогда за свои работы.`);
	if (minDays__plural === "few") return /** @type {LocalizedString} */ (`Голосовать могут только подтверждённые аккаунты старше ${minDays__number} дней, и никогда за свои работы.`);
	if (minDays__plural === "many") return /** @type {LocalizedString} */ (`Голосовать могут только подтверждённые аккаунты старше ${minDays__number} дней, и никогда за свои работы.`);
	return /** @type {LocalizedString} */ (`Голосовать могут только подтверждённые аккаунты старше ${minDays__number} дня, и никогда за свои работы.`)
	
};

const sv_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("sv", i?.minDays, {});
	const minDays__number = registry.number("sv", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Bara verifierade konton som är minst ${minDays__number} dag gamla kan rösta, och aldrig på egna bidrag.`);
	return /** @type {LocalizedString} */ (`Bara verifierade konton som är minst ${minDays__number} dagar gamla kan rösta, och aldrig på egna bidrag.`)
	
};

const tr_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {const minDays__plural = registry.plural("tr", i?.minDays, {});
	const minDays__number = registry.number("tr", i?.minDays, {});
	if (minDays__plural === "one") return /** @type {LocalizedString} */ (`Yalnızca en az ${minDays__number} günlük doğrulanmış hesaplar oy verebilir; kimse kendi başvurusuna oy veremez.`);
	return /** @type {LocalizedString} */ (`Yalnızca en az ${minDays__number} günlük doğrulanmış hesaplar oy verebilir; kimse kendi başvurusuna oy veremez.`)
	
};

const zh_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {
	const minDays__plural = registry.plural("zh", i?.minDays, {});
	const minDays__number = registry.number("zh", i?.minDays, {});return /** @type {LocalizedString} */ (`仅限已验证且注册满 ${minDays__number} 天 的账号投票，且不能给自己的作品投票。`)
};

const ja_jams_voting_rules = /** @type {(inputs: Jams_Voting_RulesInputs) => LocalizedString} */ (i) => {
	const minDays__plural = registry.plural("ja", i?.minDays, {});
	const minDays__number = registry.number("ja", i?.minDays, {});return /** @type {LocalizedString} */ (`認証済みで作成から ${minDays__number} 日以上のアカウントのみ投票でき、自分の作品には投票できません。`)
};

/**
* | minDays__plural | output |
* | --- | --- |
* | "one" | "Only verified accounts at least {minDays__number} day old can vote, and never for their own entries." |
* | * | "Only verified accounts at least {minDays__number} days old can vote, and never for their own entries." |
*
* @param {Jams_Voting_RulesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_voting_rules = /** @type {((inputs: Jams_Voting_RulesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Voting_RulesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_voting_rules(inputs)
	if (locale === "de") return de_jams_voting_rules(inputs)
	if (locale === "fr") return fr_jams_voting_rules(inputs)
	if (locale === "it") return it_jams_voting_rules(inputs)
	if (locale === "nl") return nl_jams_voting_rules(inputs)
	if (locale === "pl") return pl_jams_voting_rules(inputs)
	if (locale === "pt") return pt_jams_voting_rules(inputs)
	if (locale === "ru") return ru_jams_voting_rules(inputs)
	if (locale === "sv") return sv_jams_voting_rules(inputs)
	if (locale === "tr") return tr_jams_voting_rules(inputs)
	if (locale === "zh") return zh_jams_voting_rules(inputs)
	if (locale === "ja") return ja_jams_voting_rules(inputs)
	return en_jams_voting_rules(inputs)
});
