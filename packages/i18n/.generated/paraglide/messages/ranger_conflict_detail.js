/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Conflict_DetailInputs */

const en_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone changed this item meanwhile. The queue has been refreshed; check it again.`)
};

const es_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien cambió este elemento mientras tanto. La cola se ha actualizado; vuelve a revisarlo.`)
};

const de_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand hat den Eintrag inzwischen geändert. Die Warteschlange wurde neu geladen; prüfe ihn erneut.`)
};

const fr_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un a modifié cet élément entre-temps. La file a été rafraîchie ; vérifiez-le à nouveau.`)
};

const it_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno ha modificato questo elemento nel frattempo. La coda è stata aggiornata; ricontrollalo.`)
};

const nl_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand heeft dit item intussen gewijzigd. De wachtrij is ververst; bekijk het opnieuw.`)
};

const pl_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś w międzyczasie zmienił ten element. Kolejka została odświeżona; sprawdź go ponownie.`)
};

const pt_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém alterou este item nesse meio-tempo. A fila foi atualizada; confira de novo.`)
};

const ru_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то изменил этот элемент тем временем. Очередь обновлена; проверьте его ещё раз.`)
};

const sv_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon ändrade objektet under tiden. Kön har uppdaterats; kontrollera det igen.`)
};

const tr_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu arada biri öğeyi değiştirdi. Kuyruk yenilendi; tekrar kontrol et.`)
};

const zh_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人在此期间修改了该项目。队列已刷新，请重新检查。`)
};

const ja_ranger_conflict_detail = /** @type {(inputs: Ranger_Conflict_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その間に誰かがこの項目を変更しました。キューを更新したので、もう一度確認してください。`)
};

/**
* | output |
* | --- |
* | "Someone changed this item meanwhile. The queue has been refreshed; check it again." |
*
* @param {Ranger_Conflict_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_conflict_detail = /** @type {((inputs?: Ranger_Conflict_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Conflict_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_conflict_detail(inputs)
	if (locale === "de") return de_ranger_conflict_detail(inputs)
	if (locale === "fr") return fr_ranger_conflict_detail(inputs)
	if (locale === "it") return it_ranger_conflict_detail(inputs)
	if (locale === "nl") return nl_ranger_conflict_detail(inputs)
	if (locale === "pl") return pl_ranger_conflict_detail(inputs)
	if (locale === "pt") return pt_ranger_conflict_detail(inputs)
	if (locale === "ru") return ru_ranger_conflict_detail(inputs)
	if (locale === "sv") return sv_ranger_conflict_detail(inputs)
	if (locale === "tr") return tr_ranger_conflict_detail(inputs)
	if (locale === "zh") return zh_ranger_conflict_detail(inputs)
	if (locale === "ja") return ja_ranger_conflict_detail(inputs)
	return en_ranger_conflict_detail(inputs)
});
