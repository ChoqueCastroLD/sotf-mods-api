/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Content_Radar_Works_EmptyInputs */

const en_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No top mod is confirmed on ${i?.build} yet. Tried one? Report back.`)
};

const es_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aún no hay mods principales confirmados en ${i?.build}. ¿Probaste alguno? Cuéntanos.`)
};

const de_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Noch kein Top-Mod ist auf ${i?.build} bestätigt. Einen getestet? Melde dich.`)
};

const fr_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucun mod principal n’est encore confirmé sur ${i?.build}. Vous en avez testé un ? Faites-nous signe.`)
};

const it_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessuna mod principale è ancora confermata su ${i?.build}. Ne hai provata una? Faccelo sapere.`)
};

const nl_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nog geen topmod is bevestigd op ${i?.build}. Er een geprobeerd? Laat het weten.`)
};

const pl_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Żaden czołowy mod nie jest jeszcze potwierdzony na ${i?.build}. Sprawdziłeś któryś? Daj znać.`)
};

const pt_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhum mod principal foi confirmado na ${i?.build} ainda. Testou algum? Conte pra gente.`)
};

const ru_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Пока ни один топ-мод не подтверждён на ${i?.build}. Пробовали какой-нибудь? Расскажите.`)
};

const sv_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ingen toppmodd är bekräftad på ${i?.build} än. Testat någon? Hör av dig.`)
};

const tr_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} sürümünde henüz doğrulanmış popüler mod yok. Birini denedin mi? Haber ver.`)
};

const zh_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} 上还没有确认可用的热门模组。试过哪个？告诉我们。`)
};

const ja_content_radar_works_empty = /** @type {(inputs: Content_Radar_Works_EmptyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.build} で動作が確認された上位 Mod はまだありません。試したら報告してください。`)
};

/**
* | output |
* | --- |
* | "No top mod is confirmed on {build} yet. Tried one? Report back." |
*
* @param {Content_Radar_Works_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_works_empty = /** @type {((inputs: Content_Radar_Works_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Works_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_works_empty(inputs)
	if (locale === "de") return de_content_radar_works_empty(inputs)
	if (locale === "fr") return fr_content_radar_works_empty(inputs)
	if (locale === "it") return it_content_radar_works_empty(inputs)
	if (locale === "nl") return nl_content_radar_works_empty(inputs)
	if (locale === "pl") return pl_content_radar_works_empty(inputs)
	if (locale === "pt") return pt_content_radar_works_empty(inputs)
	if (locale === "ru") return ru_content_radar_works_empty(inputs)
	if (locale === "sv") return sv_content_radar_works_empty(inputs)
	if (locale === "tr") return tr_content_radar_works_empty(inputs)
	if (locale === "zh") return zh_content_radar_works_empty(inputs)
	if (locale === "ja") return ja_content_radar_works_empty(inputs)
	return en_content_radar_works_empty(inputs)
});
