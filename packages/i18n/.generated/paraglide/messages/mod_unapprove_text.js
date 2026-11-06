/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Unapprove_TextInputs */

const en_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It goes back to Pending approval: it leaves the main list and returns to the New mods queue.`)
};

const es_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuelve a Pendiente de aprobación: sale de la lista principal y regresa a la cola de mods nuevos.`)
};

const de_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sie geht zurück auf „Wartet auf Freigabe“: Sie verschwindet aus der Hauptliste und kommt zurück in die Warteschlange „Neue Mods“.`)
};

const fr_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il repasse en attente d’approbation : il quitte la liste principale et revient dans la file des nouveaux mods.`)
};

const it_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna in attesa di approvazione: esce dalla lista principale e torna nella coda delle nuove mod.`)
};

const nl_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mod gaat terug naar Wacht op goedkeuring: hij verdwijnt uit de hoofdlijst en keert terug in de wachtrij voor nieuwe mods.`)
};

const pl_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod wraca do stanu oczekiwania na zatwierdzenie: znika z głównej listy i wraca do kolejki nowych modów.`)
};

const pt_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volta para Aguardando aprovação: sai da lista principal e retorna à fila de novos mods.`)
};

const ru_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод вернётся в статус ожидания одобрения: он пропадёт из основного списка и вернётся в очередь новых модов.`)
};

const sv_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den går tillbaka till Väntar på godkännande: den försvinner från huvudlistan och hamnar i kön för nya moddar.`)
};

const tr_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onay bekliyor durumuna döner: ana listeden çıkar ve yeni modlar kuyruğuna geri girer.`)
};

const zh_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它将回到“待批准”状态：从主列表移除，并返回新模组队列。`)
};

const ja_mod_unapprove_text = /** @type {(inputs: Mod_Unapprove_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認待ちに戻ります。メインの一覧から外れ、新規MODのキューに戻ります。`)
};

/**
* | output |
* | --- |
* | "It goes back to Pending approval: it leaves the main list and returns to the New mods queue." |
*
* @param {Mod_Unapprove_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_unapprove_text = /** @type {((inputs?: Mod_Unapprove_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Unapprove_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_unapprove_text(inputs)
	if (locale === "de") return de_mod_unapprove_text(inputs)
	if (locale === "fr") return fr_mod_unapprove_text(inputs)
	if (locale === "it") return it_mod_unapprove_text(inputs)
	if (locale === "nl") return nl_mod_unapprove_text(inputs)
	if (locale === "pl") return pl_mod_unapprove_text(inputs)
	if (locale === "pt") return pt_mod_unapprove_text(inputs)
	if (locale === "ru") return ru_mod_unapprove_text(inputs)
	if (locale === "sv") return sv_mod_unapprove_text(inputs)
	if (locale === "tr") return tr_mod_unapprove_text(inputs)
	if (locale === "zh") return zh_mod_unapprove_text(inputs)
	if (locale === "ja") return ja_mod_unapprove_text(inputs)
	return en_mod_unapprove_text(inputs)
});
