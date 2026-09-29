/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Conflict_DetailInputs */

const en_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This changed while you were working on it. Reload to see the latest version, then try again.`)
};

const es_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto cambió mientras trabajabas en ello. Recarga para ver la versión más reciente y vuelve a intentarlo.`)
};

const de_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das hat sich geändert, während du daran gearbeitet hast. Lade neu, um die aktuelle Version zu sehen, und versuch es erneut.`)
};

const fr_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce contenu a changé pendant que vous travailliez dessus. Rechargez pour voir la dernière version, puis réessayez.`)
};

const it_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo contenuto è cambiato mentre ci lavoravi. Ricarica per vedere la versione più recente, poi riprova.`)
};

const nl_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is gewijzigd terwijl je eraan werkte. Laad opnieuw om de nieuwste versie te zien en probeer het nog eens.`)
};

const pl_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To zmieniło się, gdy nad tym pracowałeś. Odśwież, aby zobaczyć najnowszą wersję, i spróbuj ponownie.`)
};

const pt_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isto mudou enquanto você trabalhava nele. Recarregue para ver a versão mais recente e tente de novo.`)
};

const ru_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока вы работали, данные изменились. Перезагрузите страницу, чтобы увидеть последнюю версию, и попробуйте снова.`)
};

const sv_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här ändrades medan du arbetade med det. Ladda om för att se den senaste versionen och försök igen.`)
};

const tr_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sen üzerinde çalışırken bu değişti. En son sürümü görmek için sayfayı yenile ve tekrar dene.`)
};

const zh_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在你编辑期间内容发生了变化。请刷新查看最新版本后重试。`)
};

const ja_errors_code_conflict_detail = /** @type {(inputs: Errors_Code_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作業中に内容が変更されました。再読み込みして最新の状態を確認し、もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "This changed while you were working on it. Reload to see the latest version, then try again." |
*
* @param {Errors_Code_Conflict_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_conflict_detail = /** @type {((inputs?: Errors_Code_Conflict_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Conflict_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_conflict_detail(inputs)
	if (locale === "de") return de_errors_code_conflict_detail(inputs)
	if (locale === "fr") return fr_errors_code_conflict_detail(inputs)
	if (locale === "it") return it_errors_code_conflict_detail(inputs)
	if (locale === "nl") return nl_errors_code_conflict_detail(inputs)
	if (locale === "pl") return pl_errors_code_conflict_detail(inputs)
	if (locale === "pt") return pt_errors_code_conflict_detail(inputs)
	if (locale === "ru") return ru_errors_code_conflict_detail(inputs)
	if (locale === "sv") return sv_errors_code_conflict_detail(inputs)
	if (locale === "tr") return tr_errors_code_conflict_detail(inputs)
	if (locale === "zh") return zh_errors_code_conflict_detail(inputs)
	if (locale === "ja") return ja_errors_code_conflict_detail(inputs)
	return en_errors_code_conflict_detail(inputs)
});
