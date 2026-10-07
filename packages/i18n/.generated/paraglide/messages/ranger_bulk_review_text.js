/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Bulk_Review_TextInputs */

const en_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`They leave the queue and each one is logged. Review them first if you have not looked at them.`)
};

const es_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salen de la cola y cada una queda registrada. Revísalas antes si todavía no las has mirado.`)
};

const de_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sie verlassen die Warteschlange und jede wird protokolliert. Prüfe sie zuerst, falls du sie noch nicht angesehen hast.`)
};

const fr_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elles quittent la file et chacune est consignée. Examinez-les d’abord si vous ne l’avez pas fait.`)
};

const it_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escono dalla coda e ognuna viene registrata. Controllale prima se non lo hai ancora fatto.`)
};

const nl_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ze verdwijnen uit de wachtrij en elke wordt vastgelegd. Bekijk ze eerst als je dat nog niet hebt gedaan.`)
};

const pl_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znikną z kolejki, a każda zostanie zapisana w dzienniku. Jeśli ich jeszcze nie sprawdzono, najpierw je przejrzyj.`)
};

const pt_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saem da fila e cada uma fica registrada. Revise-as antes, se ainda não olhou.`)
};

const ru_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Они уйдут из очереди, каждое действие будет записано. Если вы их ещё не смотрели, сначала проверьте.`)
};

const sv_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De lämnar kön och varje åtgärd loggas. Granska dem först om du inte har tittat på dem.`)
};

const tr_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuyruktan çıkarlar ve her biri kayda geçer. Henüz bakmadıysanız önce inceleyin.`)
};

const zh_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它们会离开队列，每一项都会被记录。如果还没看过，请先审核。`)
};

const ja_ranger_bulk_review_text = /** @type {(inputs: Ranger_Bulk_Review_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キューから外れ、1 件ごとに記録されます。まだ確認していない場合は、先に確認してください。`)
};

/**
* | output |
* | --- |
* | "They leave the queue and each one is logged. Review them first if you have not looked at them." |
*
* @param {Ranger_Bulk_Review_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_review_text = /** @type {((inputs?: Ranger_Bulk_Review_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_Review_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_review_text(inputs)
	if (locale === "de") return de_ranger_bulk_review_text(inputs)
	if (locale === "fr") return fr_ranger_bulk_review_text(inputs)
	if (locale === "it") return it_ranger_bulk_review_text(inputs)
	if (locale === "nl") return nl_ranger_bulk_review_text(inputs)
	if (locale === "pl") return pl_ranger_bulk_review_text(inputs)
	if (locale === "pt") return pt_ranger_bulk_review_text(inputs)
	if (locale === "ru") return ru_ranger_bulk_review_text(inputs)
	if (locale === "sv") return sv_ranger_bulk_review_text(inputs)
	if (locale === "tr") return tr_ranger_bulk_review_text(inputs)
	if (locale === "zh") return zh_ranger_bulk_review_text(inputs)
	if (locale === "ja") return ja_ranger_bulk_review_text(inputs)
	return en_ranger_bulk_review_text(inputs)
});
