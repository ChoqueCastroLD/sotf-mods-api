/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Results_Auto_OffInputs */

const en_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Results are not published automatically. Publish them here when you are ready.`)
};

const es_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los resultados no se publican solos. Publícalos aquí cuando estés listo.`)
};

const de_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnisse werden nicht automatisch veröffentlicht. Veröffentliche sie hier, wenn du bereit bist.`)
};

const fr_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les résultats ne sont pas publiés automatiquement. Publiez-les ici quand vous êtes prêt.`)
};

const it_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I risultati non vengono pubblicati in automatico. Pubblicali qui quando sei pronto.`)
};

const nl_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten worden niet automatisch gepubliceerd. Publiceer ze hier als je er klaar voor bent.`)
};

const pl_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyniki nie są publikowane automatycznie. Opublikuj je tutaj, gdy będziesz gotowy.`)
};

const pt_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os resultados não são publicados automaticamente. Publique-os aqui quando estiver pronto.`)
};

const ru_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Итоги не публикуются автоматически. Опубликуйте их здесь, когда будете готовы.`)
};

const sv_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultaten publiceras inte automatiskt. Publicera dem här när du är redo.`)
};

const tr_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuçlar otomatik yayımlanmaz. Hazır olduğunuzda buradan yayımlayın.`)
};

const zh_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结果不会自动发布。准备好后请在这里发布。`)
};

const ja_jams_results_auto_off = /** @type {(inputs: Jams_Results_Auto_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果は自動では公開されません。準備ができたらここで公開してください。`)
};

/**
* | output |
* | --- |
* | "Results are not published automatically. Publish them here when you are ready." |
*
* @param {Jams_Results_Auto_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_results_auto_off = /** @type {((inputs?: Jams_Results_Auto_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_Auto_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_results_auto_off(inputs)
	if (locale === "de") return de_jams_results_auto_off(inputs)
	if (locale === "fr") return fr_jams_results_auto_off(inputs)
	if (locale === "it") return it_jams_results_auto_off(inputs)
	if (locale === "nl") return nl_jams_results_auto_off(inputs)
	if (locale === "pl") return pl_jams_results_auto_off(inputs)
	if (locale === "pt") return pt_jams_results_auto_off(inputs)
	if (locale === "ru") return ru_jams_results_auto_off(inputs)
	if (locale === "sv") return sv_jams_results_auto_off(inputs)
	if (locale === "tr") return tr_jams_results_auto_off(inputs)
	if (locale === "zh") return zh_jams_results_auto_off(inputs)
	if (locale === "ja") return ja_jams_results_auto_off(inputs)
	return en_jams_results_auto_off(inputs)
});
