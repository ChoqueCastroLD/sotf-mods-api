/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Voting_HintInputs */

const en_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vote counts stay hidden until the results are published. You can change your ratings until voting closes.`)
};

const es_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los votos permanecen ocultos hasta que se publiquen los resultados. Puedes cambiar tus valoraciones hasta que cierre la votación.`)
};

const de_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Stimmenzahlen bleiben bis zur Veröffentlichung der Ergebnisse verborgen. Du kannst deine Bewertungen ändern, bis die Abstimmung endet.`)
};

const fr_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les décomptes restent masqués jusqu'à la publication des résultats. Vous pouvez modifier vos notes jusqu'à la clôture du vote.`)
};

const it_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I conteggi dei voti restano nascosti fino alla pubblicazione dei risultati. Puoi modificare le tue valutazioni fino alla chiusura della votazione.`)
};

const nl_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stemaantallen blijven verborgen tot de resultaten worden gepubliceerd. Je kunt je beoordelingen wijzigen tot het stemmen sluit.`)
};

const pl_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liczba głosów pozostaje ukryta do opublikowania wyników. Możesz zmieniać oceny do końca głosowania.`)
};

const pt_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As contagens de votos ficam ocultas até a publicação dos resultados. Você pode alterar suas notas até o fim da votação.`)
};

const ru_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Число голосов скрыто до публикации результатов. Оценки можно менять до конца голосования.`)
};

const sv_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Röstsiffrorna är dolda tills resultaten publiceras. Du kan ändra dina betyg tills röstningen stänger.`)
};

const tr_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçlar yayımlanana kadar oy sayıları gizli kalır. Oylama kapanana kadar puanlarınızı değiştirebilirsiniz.`)
};

const zh_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结果公布前不显示票数。投票截止前可以修改评分。`)
};

const ja_jams_voting_hint = /** @type {(inputs: Jams_Voting_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果が公開されるまで票数は非表示です。投票締め切りまで評価を変更できます。`)
};

/**
* | output |
* | --- |
* | "Vote counts stay hidden until the results are published. You can change your ratings until voting closes." |
*
* @param {Jams_Voting_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_voting_hint = /** @type {((inputs?: Jams_Voting_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Voting_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_voting_hint(inputs)
	if (locale === "de") return de_jams_voting_hint(inputs)
	if (locale === "fr") return fr_jams_voting_hint(inputs)
	if (locale === "it") return it_jams_voting_hint(inputs)
	if (locale === "nl") return nl_jams_voting_hint(inputs)
	if (locale === "pl") return pl_jams_voting_hint(inputs)
	if (locale === "pt") return pt_jams_voting_hint(inputs)
	if (locale === "ru") return ru_jams_voting_hint(inputs)
	if (locale === "sv") return sv_jams_voting_hint(inputs)
	if (locale === "tr") return tr_jams_voting_hint(inputs)
	if (locale === "zh") return zh_jams_voting_hint(inputs)
	if (locale === "ja") return ja_jams_voting_hint(inputs)
	return en_jams_voting_hint(inputs)
});
