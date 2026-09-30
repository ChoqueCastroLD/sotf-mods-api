/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Item_Gone_TextInputs */

const en_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Another ranger decided on this item, or it left the queue.`)
};

const es_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otro guardabosques ya decidió sobre este elemento, o salió de la cola.`)
};

const de_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein anderer Ranger hat darüber entschieden, oder der Eintrag hat die Warteschlange verlassen.`)
};

const fr_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un autre ranger a statué sur cet élément, ou il a quitté la file.`)
};

const it_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un altro ranger ha già deciso su questo elemento, oppure è uscito dalla coda.`)
};

const nl_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een andere ranger heeft al over dit item beslist, of het heeft de wachtrij verlaten.`)
};

const pl_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inny strażnik już zdecydował w tej sprawie albo element opuścił kolejkę.`)
};

const pt_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro guarda já decidiu sobre este item, ou ele saiu da fila.`)
};

const ru_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другой рейнджер уже принял решение, или элемент покинул очередь.`)
};

const sv_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En annan ranger har redan beslutat om objektet, eller så har det lämnat kön.`)
};

const tr_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu öğe hakkında başka bir korucu karar verdi ya da öğe kuyruktan çıktı.`)
};

const zh_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他护林员已对此作出决定，或它已离开队列。`)
};

const ja_ranger_item_gone_text = /** @type {(inputs: Ranger_Item_Gone_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別のレンジャーが判断したか、項目がキューから外れました。`)
};

/**
* | output |
* | --- |
* | "Another ranger decided on this item, or it left the queue." |
*
* @param {Ranger_Item_Gone_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_item_gone_text = /** @type {((inputs?: Ranger_Item_Gone_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Item_Gone_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_item_gone_text(inputs)
	if (locale === "de") return de_ranger_item_gone_text(inputs)
	if (locale === "fr") return fr_ranger_item_gone_text(inputs)
	if (locale === "it") return it_ranger_item_gone_text(inputs)
	if (locale === "nl") return nl_ranger_item_gone_text(inputs)
	if (locale === "pl") return pl_ranger_item_gone_text(inputs)
	if (locale === "pt") return pt_ranger_item_gone_text(inputs)
	if (locale === "ru") return ru_ranger_item_gone_text(inputs)
	if (locale === "sv") return sv_ranger_item_gone_text(inputs)
	if (locale === "tr") return tr_ranger_item_gone_text(inputs)
	if (locale === "zh") return zh_ranger_item_gone_text(inputs)
	if (locale === "ja") return ja_ranger_item_gone_text(inputs)
	return en_ranger_item_gone_text(inputs)
});
