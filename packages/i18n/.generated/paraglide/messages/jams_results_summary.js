/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ participants: NonNullable<unknown>, voters: NonNullable<unknown> }} Jams_Results_SummaryInputs */

const en_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("en", i?.participants, {});
	const participants__number = registry.number("en", i?.participants, {});
	const voters__plural = registry.plural("en", i?.voters, {});
	const voters__number = registry.number("en", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participant · ${voters__number} voter`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participant · ${voters__number} voters`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participants · ${voters__number} voter`);
	return /** @type {LocalizedString} */ (`${participants__number} participants · ${voters__number} voters`)
	
};

const es_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("es", i?.participants, {});
	const participants__number = registry.number("es", i?.participants, {});
	const voters__plural = registry.plural("es", i?.voters, {});
	const voters__number = registry.number("es", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participante · ${voters__number} votante`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participante · ${voters__number} votantes`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participantes · ${voters__number} votante`);
	return /** @type {LocalizedString} */ (`${participants__number} participantes · ${voters__number} votantes`)
	
};

const de_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("de", i?.participants, {});
	const participants__number = registry.number("de", i?.participants, {});
	const voters__plural = registry.plural("de", i?.voters, {});
	const voters__number = registry.number("de", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} Teilnehmer · ${voters__number} Abstimmender`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} Teilnehmer · ${voters__number} Abstimmende`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} Teilnehmer · ${voters__number} Abstimmender`);
	return /** @type {LocalizedString} */ (`${participants__number} Teilnehmer · ${voters__number} Abstimmende`)
	
};

const fr_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("fr", i?.participants, {});
	const participants__number = registry.number("fr", i?.participants, {});
	const voters__plural = registry.plural("fr", i?.voters, {});
	const voters__number = registry.number("fr", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participant · ${voters__number} votant`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participant · ${voters__number} votants`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participants · ${voters__number} votant`);
	return /** @type {LocalizedString} */ (`${participants__number} participants · ${voters__number} votants`)
	
};

const it_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("it", i?.participants, {});
	const participants__number = registry.number("it", i?.participants, {});
	const voters__plural = registry.plural("it", i?.voters, {});
	const voters__number = registry.number("it", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} partecipante · ${voters__number} votante`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} partecipante · ${voters__number} votanti`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} partecipanti · ${voters__number} votante`);
	return /** @type {LocalizedString} */ (`${participants__number} partecipanti · ${voters__number} votanti`)
	
};

const nl_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("nl", i?.participants, {});
	const participants__number = registry.number("nl", i?.participants, {});
	const voters__plural = registry.plural("nl", i?.voters, {});
	const voters__number = registry.number("nl", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} deelnemer · ${voters__number} stemmer`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} deelnemer · ${voters__number} stemmers`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} deelnemers · ${voters__number} stemmer`);
	return /** @type {LocalizedString} */ (`${participants__number} deelnemers · ${voters__number} stemmers`)
	
};

const pl_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("pl", i?.participants, {});
	const participants__number = registry.number("pl", i?.participants, {});
	const voters__plural = registry.plural("pl", i?.voters, {});
	const voters__number = registry.number("pl", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} uczestnik · ${voters__number} głosujący`);
	if (participants__plural === "one" && voters__plural === "few") return /** @type {LocalizedString} */ (`${participants__number} uczestnik · ${voters__number} głosujących`);
	if (participants__plural === "one" && voters__plural === "many") return /** @type {LocalizedString} */ (`${participants__number} uczestnik · ${voters__number} głosujących`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} uczestnik · ${voters__number} głosującego`);
	if (participants__plural === "few" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} uczestników · ${voters__number} głosujący`);
	if (participants__plural === "few" && voters__plural === "few") return /** @type {LocalizedString} */ (`${participants__number} uczestników · ${voters__number} głosujących`);
	if (participants__plural === "few" && voters__plural === "many") return /** @type {LocalizedString} */ (`${participants__number} uczestników · ${voters__number} głosujących`);
	if (participants__plural === "few") return /** @type {LocalizedString} */ (`${participants__number} uczestników · ${voters__number} głosującego`);
	if (participants__plural === "many" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} uczestników · ${voters__number} głosujący`);
	if (participants__plural === "many" && voters__plural === "few") return /** @type {LocalizedString} */ (`${participants__number} uczestników · ${voters__number} głosujących`);
	if (participants__plural === "many" && voters__plural === "many") return /** @type {LocalizedString} */ (`${participants__number} uczestników · ${voters__number} głosujących`);
	if (participants__plural === "many") return /** @type {LocalizedString} */ (`${participants__number} uczestników · ${voters__number} głosującego`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} uczestnika · ${voters__number} głosujący`);
	if (voters__plural === "few") return /** @type {LocalizedString} */ (`${participants__number} uczestnika · ${voters__number} głosujących`);
	if (voters__plural === "many") return /** @type {LocalizedString} */ (`${participants__number} uczestnika · ${voters__number} głosujących`);
	return /** @type {LocalizedString} */ (`${participants__number} uczestnika · ${voters__number} głosującego`)
	
};

const pt_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("pt", i?.participants, {});
	const participants__number = registry.number("pt", i?.participants, {});
	const voters__plural = registry.plural("pt", i?.voters, {});
	const voters__number = registry.number("pt", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participante · ${voters__number} votante`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participante · ${voters__number} votantes`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} participantes · ${voters__number} votante`);
	return /** @type {LocalizedString} */ (`${participants__number} participantes · ${voters__number} votantes`)
	
};

const ru_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("ru", i?.participants, {});
	const participants__number = registry.number("ru", i?.participants, {});
	const voters__plural = registry.plural("ru", i?.voters, {});
	const voters__number = registry.number("ru", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} участник · ${voters__number} голосующий`);
	if (participants__plural === "one" && voters__plural === "few") return /** @type {LocalizedString} */ (`${participants__number} участник · ${voters__number} голосующих`);
	if (participants__plural === "one" && voters__plural === "many") return /** @type {LocalizedString} */ (`${participants__number} участник · ${voters__number} голосующих`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} участник · ${voters__number} голосующего`);
	if (participants__plural === "few" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} участника · ${voters__number} голосующий`);
	if (participants__plural === "few" && voters__plural === "few") return /** @type {LocalizedString} */ (`${participants__number} участника · ${voters__number} голосующих`);
	if (participants__plural === "few" && voters__plural === "many") return /** @type {LocalizedString} */ (`${participants__number} участника · ${voters__number} голосующих`);
	if (participants__plural === "few") return /** @type {LocalizedString} */ (`${participants__number} участника · ${voters__number} голосующего`);
	if (participants__plural === "many" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} участников · ${voters__number} голосующий`);
	if (participants__plural === "many" && voters__plural === "few") return /** @type {LocalizedString} */ (`${participants__number} участников · ${voters__number} голосующих`);
	if (participants__plural === "many" && voters__plural === "many") return /** @type {LocalizedString} */ (`${participants__number} участников · ${voters__number} голосующих`);
	if (participants__plural === "many") return /** @type {LocalizedString} */ (`${participants__number} участников · ${voters__number} голосующего`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} участника · ${voters__number} голосующий`);
	if (voters__plural === "few") return /** @type {LocalizedString} */ (`${participants__number} участника · ${voters__number} голосующих`);
	if (voters__plural === "many") return /** @type {LocalizedString} */ (`${participants__number} участника · ${voters__number} голосующих`);
	return /** @type {LocalizedString} */ (`${participants__number} участника · ${voters__number} голосующего`)
	
};

const sv_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("sv", i?.participants, {});
	const participants__number = registry.number("sv", i?.participants, {});
	const voters__plural = registry.plural("sv", i?.voters, {});
	const voters__number = registry.number("sv", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} deltagare · ${voters__number} väljare`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} deltagare · ${voters__number} väljare`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} deltagare · ${voters__number} väljare`);
	return /** @type {LocalizedString} */ (`${participants__number} deltagare · ${voters__number} väljare`)
	
};

const tr_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {const participants__plural = registry.plural("tr", i?.participants, {});
	const participants__number = registry.number("tr", i?.participants, {});
	const voters__plural = registry.plural("tr", i?.voters, {});
	const voters__number = registry.number("tr", i?.voters, {});
	if (participants__plural === "one" && voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} katılımcı · ${voters__number} oy veren`);
	if (participants__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} katılımcı · ${voters__number} oy veren`);
	if (voters__plural === "one") return /** @type {LocalizedString} */ (`${participants__number} katılımcı · ${voters__number} oy veren`);
	return /** @type {LocalizedString} */ (`${participants__number} katılımcı · ${voters__number} oy veren`)
	
};

const zh_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {
	const participants__plural = registry.plural("zh", i?.participants, {});
	const participants__number = registry.number("zh", i?.participants, {});
	const voters__plural = registry.plural("zh", i?.voters, {});
	const voters__number = registry.number("zh", i?.voters, {});return /** @type {LocalizedString} */ (`${participants__number} 位参赛者 · ${voters__number} 位投票者`)
};

const ja_jams_results_summary = /** @type {(inputs: Jams_Results_SummaryInputs) => LocalizedString} */ (i) => {
	const participants__plural = registry.plural("ja", i?.participants, {});
	const participants__number = registry.number("ja", i?.participants, {});
	const voters__plural = registry.plural("ja", i?.voters, {});
	const voters__number = registry.number("ja", i?.voters, {});return /** @type {LocalizedString} */ (`参加者 ${participants__number} 人 · 投票者 ${voters__number} 人`)
};

/**
* | participants__plural | voters__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{participants__number} participant · {voters__number} voter" |
* | "one" | * | "{participants__number} participant · {voters__number} voters" |
* | * | "one" | "{participants__number} participants · {voters__number} voter" |
* | * | * | "{participants__number} participants · {voters__number} voters" |
*
* @param {Jams_Results_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_results_summary = /** @type {((inputs: Jams_Results_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_results_summary(inputs)
	if (locale === "de") return de_jams_results_summary(inputs)
	if (locale === "fr") return fr_jams_results_summary(inputs)
	if (locale === "it") return it_jams_results_summary(inputs)
	if (locale === "nl") return nl_jams_results_summary(inputs)
	if (locale === "pl") return pl_jams_results_summary(inputs)
	if (locale === "pt") return pt_jams_results_summary(inputs)
	if (locale === "ru") return ru_jams_results_summary(inputs)
	if (locale === "sv") return sv_jams_results_summary(inputs)
	if (locale === "tr") return tr_jams_results_summary(inputs)
	if (locale === "zh") return zh_jams_results_summary(inputs)
	if (locale === "ja") return ja_jams_results_summary(inputs)
	return en_jams_results_summary(inputs)
});
